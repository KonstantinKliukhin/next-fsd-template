import { ENV } from "../../config/env";

const start = ENV.NEXT_PUBLIC_APP_URL?.endsWith?.("/")
  ? ENV.NEXT_PUBLIC_APP_URL?.slice(0, -1)
  : ENV.NEXT_PUBLIC_APP_URL;

export function getFullAppRoute(route: string) {
  return `${start}${route}`;
}
