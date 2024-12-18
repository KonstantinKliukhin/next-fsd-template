import { UserRoles } from "@/entities/user";
import { APP_ROUTES } from "@/shared/config/app-routes";

import type { Rule, RuleProps } from "../types";

function getAuthRulesData({ user }: RuleProps) {
  const isAuthorized = Boolean(user);
  const isAdmin = user?.role === UserRoles.Admin;

  return {
    isAuthorized,
    isAdmin,
  };
}

export const notAuthorizedRule: Rule = (props) => {
  const { isAuthorized } = getAuthRulesData(props);

  // if not authorized and trying to go further redirect to sign in
  if (!isAuthorized) {
    return props.redirect(APP_ROUTES.SIGN_IN);
  }
};

export const authorizedRule: Rule = (props) => {
  const { isAuthorized } = getAuthRulesData(props);

  // if authorized and trying to go auth route - redirect to the app
  if (isAuthorized) {
    return props.redirect(APP_ROUTES.DASHBOARD);
  }
};
