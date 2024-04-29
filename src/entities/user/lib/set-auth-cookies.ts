import { addDays, addHours } from "date-fns";

import { cookiesKeys } from "@/shared/config/cookies";
import { addCookie } from "@/shared/lib/add-cookie";
import { deleteCookie } from "@/shared/lib/delete-cookie";
import { getIsClient } from "@/shared/lib/get-is-client";

export function setAuthCookies(authToken: string, refreshToken: string) {
  if (!getIsClient()) return;

  const currentDate = new Date();
  const plusTwelveHours = addHours(currentDate, 12);
  const plusTwoDays = addDays(currentDate, 2);

  deleteCookie(cookiesKeys.refreshToken);
  deleteCookie(cookiesKeys.authToken);

  addCookie(cookiesKeys.authToken, authToken, plusTwelveHours.toUTCString());
  addCookie(cookiesKeys.refreshToken, refreshToken, plusTwoDays.toUTCString());
}
