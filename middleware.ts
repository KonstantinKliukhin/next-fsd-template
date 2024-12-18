import type { NextRequest } from "next/server";

import { ROUTES_RULES_CONFIG, runRoutesMiddleware } from "@/app/rules";

export default async function middleware(req: NextRequest) {
  return runRoutesMiddleware(req, ROUTES_RULES_CONFIG);
}

export const config = {
  matcher: ["/sign-up", "/sign-in", "/dashboard"],
};
