import { env } from "./env";

export const API_ROUTES = {
  // auth
  REFRESH_TOKEN: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/refresh-token`,
  REQUEST_RESET_PASSWORD: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/request-reset-password`,
  CONFIRM_RESET_PASSWORD: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/confirm-reset-password`,
  SIGN_IN: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/sign-in`,
  SIGN_UP: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/sign-up`,

  // users
  ME: `${env.NEXT_PUBLIC_APP_API_URL}/users/me`,
} as const;
