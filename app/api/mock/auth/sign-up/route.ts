import sign from "jwt-encode";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { User } from "@/entities/user";
import { COOKIES_KEYS } from "@/shared/config/cookies-keys";

import type { MockedUser } from "../../users";
import { users } from "../../users";

export const POST = async (req: Request) => {
  const creds = (await req.json()) as { email: string; password: string };

  if (users.some((user) => user.user.email === creds.email)) {
    const error = {
      message: "User already exists",
      statusCode: 403,
      error: "",
    };

    return NextResponse.json(error, { status: 403 });
  }

  const userData: User = {
    id: String(Math.random()),
    role: "user",
    email: creds.email,
  };

  const user: MockedUser = {
    tokens: {
      accessToken: sign(
        { ...userData, exp: String(Date.now() + 30 * 24 * 60 * 60 * 1000) },
        "secret"
      ),
      refreshToken: sign(
        { ...userData, exp: String(Date.now() + 15 * 60 * 1000) },
        "secret"
      ),
    },
    user: {
      ...userData,
      password: creds.password,
    },
  };

  users.push(user);

  cookies().set(COOKIES_KEYS.ACCESS_TOKEN, user.tokens.accessToken, {
    httpOnly: true,
    secure: true,
  });
  cookies().set(COOKIES_KEYS.REFRESH_TOKEN, user.tokens.refreshToken, {
    httpOnly: true,
    secure: true,
  });

  return NextResponse.json(user, { status: 201 });
};
