import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { COOKIES_KEYS } from "@/shared/config/cookies-keys";

export const GET = async () => {
  const cookie = await cookies();
  const hasToken = Boolean(cookie.get(COOKIES_KEYS.ACCESS_TOKEN)?.value);

  return NextResponse.json({ isAuthenticated: hasToken });
};
