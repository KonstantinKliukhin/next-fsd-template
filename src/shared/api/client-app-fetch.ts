import { redirect } from "next/navigation";
import { toast } from "sonner";

import { setAuthCookiesServer } from "@/entities/user";
import { logOut } from "@/features/log-out";

import { appRoutes } from "../config/app-routes";
import { cookiesKeys } from "../config/cookies";
import { getCookieValue } from "../lib/get-cookie-value";
import { refreshUserToken } from "./refresh-user-token";

export async function clientAppFetch(
  ...args: Parameters<typeof fetch>
): Promise<ReturnType<typeof fetch>> {
  const token = getCookieValue(cookiesKeys.authToken);

  const response = await fetch(args[0], {
    ...args[1],
    headers: {
      Authorization: `Bearer ${token}`,
      ...args[1]?.headers,
    },
  });

  const isAuthError = response.status === 401;
  if (isAuthError) {
    const refreshToken = getCookieValue(cookiesKeys.refreshToken);
    if (!refreshToken) redirect(appRoutes.signIn);

    const sessionUser = await refreshUserToken(refreshToken);
    if ("message" in sessionUser) {
      await logOut();
      toast.info("Your session has expired. Please sign in again");
      redirect(appRoutes.signIn);
    } else {
      await setAuthCookiesServer(sessionUser.token, sessionUser.refreshToken);

      return await fetch(args[0], {
        ...args[1],
        headers: {
          Authorization: `Bearer ${sessionUser.token}`,
          ...args[1]?.headers,
        },
      });
    }
  }

  return response;
}
