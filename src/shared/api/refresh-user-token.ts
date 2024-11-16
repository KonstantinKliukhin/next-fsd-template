import type { SessionUser } from "@/entities/user";

import { API_ROUTES } from "../config/api-routes";

export async function refreshUserToken(refreshToken: string): Promise<SessionUser> {
  const res = await fetch(API_ROUTES.REFRESH_TOKEN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });

  return (await res.json()) as SessionUser;
}
