import { signOut } from "next-auth/react";

import { APP_ROUTES } from "@/shared/config/app-routes";

export async function logOut() {
  await signOut({ callbackUrl: APP_ROUTES.SIGN_IN });
}
