import { withAuth } from "next-auth/middleware";

import { ROUTES_RULES_CONFIG, runRoutesMiddleware } from "@/app/rules";
import { env } from "@/shared/config/env";

export default withAuth(
  async function middleware(req) {
    return runRoutesMiddleware(req, ROUTES_RULES_CONFIG);
  },
  {
    secret: env.NEXTAUTH_SECRET,
    callbacks: {
      authorized: () => true,
    },
  }
);

export const config = {
  matcher: ["/sign-up", "/sign-in", "/dashboard"],
};
