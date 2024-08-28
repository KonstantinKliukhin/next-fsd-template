import { redirect } from "next/navigation";

import { setAuthCookiesServer } from "@/entities/user";
import { logOut } from "@/features/log-out";

import { appRoutes } from "../config/app-routes";
import { cookiesKeys } from "../config/cookies";
import { refreshUserToken } from "./refresh-user-token";

// https://github.com/vercel/next.js/issues/49757
const { cookies } = require("next/headers");

export async function serverAppFetch(
  ...args: Parameters<typeof fetch>
): Promise<ReturnType<typeof fetch>> {
  const response = await fetch(args[0], {
    ...args[1],
    headers: {
      credentials: "include",
      Authorization: `Bearer ${cookies().get(cookiesKeys.authToken)?.value}`,
      ...args[1]?.headers,
    },
  });

  const isAuthError = response.status === 401;
  if (isAuthError) {
    const refreshToken = cookies().get(cookiesKeys.refreshToken)?.value;
    if (!refreshToken) redirect(appRoutes.signIn);

    const sessionUser = await refreshUserToken(refreshToken);

    if ("message" in sessionUser) {
      await logOut();
      redirect(appRoutes.signIn);
    } else {
      await setAuthCookiesServer(sessionUser.token, sessionUser.refreshToken);

      return await fetch(args[0], {
        ...args[1],
        headers: {
          credentials: "include",
          Authorization: `Bearer ${cookies().get(cookiesKeys.authToken)?.value}`,
          ...args[1]?.headers,
        },
      });
    }
  }

  return response;
}
