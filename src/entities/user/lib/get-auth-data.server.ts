import { getServerSession } from "next-auth";

import { AUTH_OPTIONS } from "@/shared/config/auth-options";

export async function getAuthDataServer() {
  const session = await getServerSession(AUTH_OPTIONS);

  const isAuthenticated = Boolean(session?.user);

  return { session, isAuthenticated };
}
