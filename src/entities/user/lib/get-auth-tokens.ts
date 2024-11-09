import { getSession } from "next-auth/react";

import { LOCAL_STORAGE_KEYS } from "@/shared/config/local-storage-keys";
import { getIsClient } from "@/shared/lib/get-is-client";

export async function getAuthTokens(): Promise<{
  accessToken: string | null;
  refreshToken: string | null;
} | null> {
  if (getIsClient()) {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN) || null;
    const refreshToken = localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN) || null;

    if (!accessToken && !refreshToken) {
      const session = await getSession();

      return {
        accessToken: session?.user?.accessToken || null,
        refreshToken: session?.user?.refreshToken || null,
      };
    }

    return { accessToken, refreshToken };
  }

  const { getAuthDataServer } = await import("./get-auth-data.server");

  const authData = await getAuthDataServer();

  return {
    accessToken: authData?.session?.user?.accessToken || null,
    refreshToken: authData?.session?.user?.refreshToken || null,
  };
}
