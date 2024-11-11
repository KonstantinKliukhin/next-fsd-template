import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { logIn } from "@/features/sign-in";
import type { SignInDto } from "@/features/sign-in/api/types/sign-in.dto";
import { signUp } from "@/features/sign-up";

import { getApiErrorMessage } from "../lib/get-api-error-message";
import { APP_ROUTES } from "./app-routes";
import { env } from "./env";

export const AUTH_OPTIONS: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      id: "sign-up-credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) throw new Error("Incorrect credentials");

        try {
          const res = await signUp(credentials.email, credentials.password);

          if (res && "message" in res) {
            throw new Error(getApiErrorMessage(res));
          }

          return {
            id: res.id,
            email: res.email,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
            role: res.role,
          };
        } catch (error) {
          console.error(error);
          if (error instanceof Error) throw error;

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
      async authorize(credentials) {
        if (!credentials) throw new Error("Credentials missed");

        try {
          const res = await logIn(credentials as SignInDto);

          if (res && "message" in res) {
            throw new Error(getApiErrorMessage(res));
          }

          return {
            id: res.id,
            email: res.email,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
            role: res.role,
          };
        } catch (error) {
          console.error(error);
          if (error instanceof Error) throw error;

          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      const isManualUpdate = trigger === "update" && session;

      if (isManualUpdate) {
        return { ...token, user: session.data.user };
      } else if (user) {
        return { ...token, user: user };
      } else {
        return token;
      }
    },
    async session({ token, session }) {
      session.user = token.user;

      return session;
    },
  },
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: APP_ROUTES.SIGN_IN,
    newUser: APP_ROUTES.SIGN_UP,
  },
};
