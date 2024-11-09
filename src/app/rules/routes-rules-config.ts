import { APP_ROUTES } from "@/shared/config/app-routes";

import { authorizedRule, notAuthorizedRule } from "./rules/auth-rules";
import type { RouteConfig } from "./types";

export const ROUTES_RULES_CONFIG: RouteConfig[] = [
  // AUTH
  {
    url: APP_ROUTES.SIGN_UP,
    rules: [authorizedRule],
  },
  {
    url: APP_ROUTES.SIGN_IN,
    rules: [authorizedRule],
  },

  // APP
  {
    url: APP_ROUTES.DASHBOARD,
    rules: [notAuthorizedRule],
  },
];
