import { withAuth } from "next-auth/middleware";

import { routesRulesConfig, runRoutesMiddleware } from "@/app/rules";
import { envServer } from "@/shared/config/env-server";

export default withAuth(
  async function middleware(req) {
    return runRoutesMiddleware(req, routesRulesConfig);
  },
  {
    secret: envServer.NEXTAUTH_SECRET,
    callbacks: {
      authorized: () => true,
    },
  }
);

export const config = {
  matcher: ["/sign-up", "/sign-in", "/dashboard"],
};
