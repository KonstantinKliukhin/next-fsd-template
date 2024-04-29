import { envClient } from "./env-client";

export const apiRoutes = {
  // auth
  refreshToken: `${envClient.API_URL}/mock/auth/refresh-token`,
  requestResetPassword: `${envClient.API_URL}/mock/auth/request-reset-password`,
  confirmResetPassword: `${envClient.API_URL}/mock/auth/confirm-reset-password`,
  signIn: `${envClient.API_URL}/mock/auth/sign-in`,
  signUp: `${envClient.API_URL}/mock/auth/sign-up`,

  // users
  me: `${envClient.API_URL}/users/me`,
} as const;
