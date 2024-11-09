import { LOCAL_STORAGE_KEYS } from "@/shared/config/local-storage-keys";
import { getIsClient } from "@/shared/lib/get-is-client";

export function saveAuthTokens(accessToken: string, refreshToken: string) {
  if (!getIsClient()) return;

  localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
  localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
}
