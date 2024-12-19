import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { COOKIES_KEYS } from "@/shared/config/cookies-keys";

import type { User } from "@/entities/user";

import { users } from "../users";

export const GET = () => {
  const accessTokenCookie = cookies().get(COOKIES_KEYS.ACCESS_TOKEN);

  if (!accessTokenCookie) return NextResponse.json({}, { status: 401 });

  const tokenUser = jwtDecode<User>(accessTokenCookie.value);

  const foundUser = users.find((user) => user.user.id === tokenUser.id);

  if (!foundUser)
    return NextResponse.json({}, { status: 404, statusText: "User not found" });

  return NextResponse.json(foundUser.user);
};
