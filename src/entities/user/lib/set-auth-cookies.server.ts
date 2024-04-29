"use server";

import { addDays, addHours } from "date-fns";
import { cookies } from "next/headers";

import { cookiesKeys } from "@/shared/config/cookies";

export async function setAuthCookiesServer(authToken: string, refreshToken: string) {
  const currentDate = new Date();
  const plusTwelveHours = addHours(currentDate, 12);
  const plusTwoDays = addDays(currentDate, 2);

  const cookiesData = cookies();

  cookiesData.delete(cookiesKeys.authToken);
  cookiesData.delete(cookiesKeys.refreshToken);

  cookiesData.set({
    value: authToken,
    name: cookiesKeys.authToken,
    sameSite: false,
    httpOnly: false,
    secure: true,
    expires: plusTwelveHours,
    maxAge: plusTwelveHours.getTime(),
  });

  cookiesData.set({
    value: refreshToken,
    name: cookiesKeys.refreshToken,
    sameSite: false,
    httpOnly: false,
    secure: true,
    expires: plusTwoDays,
    maxAge: plusTwoDays.getTime(),
  });
}
