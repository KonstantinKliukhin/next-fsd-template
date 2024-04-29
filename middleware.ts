import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

import { appRoutes } from "@/shared/config/app-routes";
import { envServer } from "@/shared/config/env-server";

const authRoutes = [appRoutes.signUp, appRoutes.signIn];

export default withAuth(
  async function middleware(req) {
    const nextUrl = req.nextUrl.pathname;
    const sessionUser = req.nextauth.token?.user;
    const isAuthorized = Boolean(sessionUser);
    const isAuthRoute = authRoutes.includes(nextUrl);

    if (isAuthorized && isAuthRoute) {
      return NextResponse.redirect(new URL(appRoutes.dashboard, req.url));
    }

    if (!isAuthorized && !isAuthRoute) {
      return NextResponse.redirect(new URL(appRoutes.signIn, req.url));
    }
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
