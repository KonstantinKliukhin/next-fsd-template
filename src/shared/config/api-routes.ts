import { ENV } from "./env";

export const API_ROUTES = {
  // auth
  REQUEST_RESET_PASSWORD: `${ENV.NEXT_PUBLIC_APP_API_URL}/mock/auth/request-reset-password`,
  CONFIRM_RESET_PASSWORD: `${ENV.NEXT_PUBLIC_APP_API_URL}/mock/auth/confirm-reset-password`,
  SIGN_IN: `${ENV.NEXT_PUBLIC_APP_API_URL}/mock/auth/sign-in`,
  SIGN_UP: `${ENV.NEXT_PUBLIC_APP_API_URL}/mock/auth/sign-up`,
  SIGN_OUT: `${ENV.NEXT_PUBLIC_APP_API_URL}/mock/auth/sign-out`,
  IS_AUTHENTICATED: `${ENV.NEXT_PUBLIC_APP_API_URL}/mock/auth/is-authenticated`,

  // users
  ME: `${ENV.NEXT_PUBLIC_APP_API_URL}/mock/me`,
  USERS: `${ENV.NEXT_PUBLIC_APP_API_URL}/mock/users`,
} as const;
