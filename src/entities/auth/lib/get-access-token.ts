"use server";
import { cookies } from "next/headers";

import { COOKIES_KEYS } from "@/shared/config/cookies-keys";

export async function getAccessToken() {
  const cookiesData = cookies();

  return cookiesData.get(COOKIES_KEYS.ACCESS_TOKEN)?.value;
}
