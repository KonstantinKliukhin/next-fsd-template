import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import type { SessionUser} from "@/entities/user";
import { setAuthCookiesServer } from "@/entities/user";
import { logIn } from "@/features/sign-in";
import { signUp } from "@/features/sign-up";

import { getApiErrorMessage } from "../lib/get-api-error-message";
import { appRoutes } from "./app-routes";
import { envServer } from "./env-server";

type SessionUserWithId = SessionUser & {
  id: string;
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      id: "sign-up-credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials): Promise<SessionUserWithId | null> {
        if (!credentials) throw new Error("Incorrect credentials");

        try {
          const res = await signUp(credentials.email, credentials.password);
          if (res && "message" in res) {
            throw new Error(getApiErrorMessage(res));
          }

          await setAuthCookiesServer(res.token, res.refreshToken);

          return { ...res, id: res.user.id };
        } catch (e) {
          console.error(e);
          if (e instanceof Error) throw e;

          return null;
        }
      },
    }),
    CredentialsProvider({
      name: "credentials",
      id: "sign-in-credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials): Promise<SessionUserWithId | null> {
        if (!credentials) throw new Error("Credentials missed");

        try {
          const res = await logIn(credentials);

          if (res && "message" in res) {
            throw new Error(getApiErrorMessage(res));
          }

          await setAuthCookiesServer(res.token, res.refreshToken);

          return {
            ...res,
            id: res.user.id,
            user: { ...res.user },
          };
        } catch (e) {
          console.error(e);
          if (e instanceof Error) throw e;

          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      const isManualUpdate = trigger === "update" && session;

      if (isManualUpdate) {
        return { ...token, ...session.data.user, user: session.data.user };
      } else if (user) {
        return { ...token, ...user, user: user };
      } else {
        return token;
      }
    },
    async session({ token, session }) {
      session.user = token.user;

      return session;
    },
  },
  secret: envServer.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: appRoutes.signIn,
    newUser: appRoutes.signUp,
  },
};
