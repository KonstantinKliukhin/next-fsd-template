import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { COOKIES_KEYS } from "@/shared/config/cookies-keys";

import { users } from "../../users";

export const POST = async (req: Request) => {
  const creds = (await req.json()) as { email: string; password: string };

  const user = users.find(({ user: { email } }) => email === creds.email);

  if (!user) {
    return NextResponse.json(
      {
        message: "User not found",
        statusCode: 404,
        error: "",
      },
      { status: 404 }
    );
  }

  if (user.user.password !== creds.password) {
    return NextResponse.json(
      {
        message: "Invalid password",
        statusCode: 403,
        error: "",
      },
      { status: 403 }
    );
  }

  cookies().set(COOKIES_KEYS.ACCESS_TOKEN, user.tokens.accessToken);
  cookies().set(COOKIES_KEYS.REFRESH_TOKEN, user.tokens.refreshToken);

  return NextResponse.json(user);
};
