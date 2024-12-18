import { env } from "./env";

export const API_ROUTES = {
  // auth
  REQUEST_RESET_PASSWORD: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/request-reset-password`,
  CONFIRM_RESET_PASSWORD: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/confirm-reset-password`,
  SIGN_IN: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/sign-in`,
  SIGN_UP: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/sign-up`,
  SIGN_OUT: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/sign-out`,
  IS_AUTHENTICATED: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/is-authenticated`,

  // users
  ME: `${env.NEXT_PUBLIC_APP_API_URL}/mock/me`,
  USERS: `${env.NEXT_PUBLIC_APP_API_URL}/mock/users`,
} as const;
