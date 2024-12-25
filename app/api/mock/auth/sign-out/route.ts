import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { COOKIES_KEYS } from "@/shared/config/cookies-keys";

export const POST = async () => {
  const cookie = await cookies();
  cookie.delete(COOKIES_KEYS.ACCESS_TOKEN);
  cookie.delete(COOKIES_KEYS.REFRESH_TOKEN);

  return NextResponse.json({ ok: true });
};
