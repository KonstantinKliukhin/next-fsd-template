import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { COOKIES_KEYS } from "@/shared/config/cookies-keys";

export const GET = () => {
  const hasToken = Boolean(cookies().get(COOKIES_KEYS.ACCESS_TOKEN)?.value);

  return NextResponse.json({ isAuthenticated: hasToken });
};
