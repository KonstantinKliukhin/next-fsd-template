import { signOut } from "next-auth/react";

import { removeAllCookies } from "./remove-all-cookies";

export async function logOut() {
  await removeAllCookies();
  await signOut();
}
