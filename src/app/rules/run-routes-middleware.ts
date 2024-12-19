import { jwtDecode } from "jwt-decode";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import type { User } from "@/entities/user";
import { COOKIES_KEYS } from "@/shared/config/cookies-keys";

import { matchPath } from "../../shared/lib/routing/match-path";
import type { RouteConfig, Rule, RuleProps } from "./types";

export function runRoutesMiddleware(
  req: NextRequest,
  config: RouteConfig[]
): NextResponse<any> | void {
  const props = createRuleProps(req);

  const currentRouteConfig = config.find((route) => matchPath(route.url, props.nextUrl));

  if (!currentRouteConfig) return;

  return executeRules(currentRouteConfig.rules, props);
}

function createRuleProps(req: NextRequest): RuleProps {
  const nextUrl = req.nextUrl.pathname;
  let user: User | null = null;

  const requestCookie = req.cookies.get(COOKIES_KEYS.ACCESS_TOKEN);

  if (requestCookie) {
    user = jwtDecode<User>(requestCookie?.value);
  }

  const redirect = (path: string) => {
    return NextResponse.redirect(new URL(path, req.url));
  };

  return {
    nextUrl,
    redirect,
    user,
  };
}

function executeRules(
  rules: Rule[],
  props: RuleProps,
  ruleIndex: number = 0
): ReturnType<Rule> | void {
  if (ruleIndex > rules.length - 1) return;

  const result = rules[ruleIndex](props);

  if (!result) {
    return executeRules(rules, props, ruleIndex + 1);
  } else {
    return result;
  }
}
