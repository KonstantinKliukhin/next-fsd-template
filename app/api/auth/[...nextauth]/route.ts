import NextAuth from "next-auth";

import { AUTH_OPTIONS } from "@/shared/config/auth-options";

const handler = NextAuth(AUTH_OPTIONS);

export { handler as GET, handler as POST };
