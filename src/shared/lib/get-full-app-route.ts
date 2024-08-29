import { envClient } from "../config/env-client";

const start = envClient.APP_URL?.endsWith?.("/")
  ? envClient.APP_URL?.slice(0, -1)
  : envClient.APP_URL;

export function getFullAppRoute(route: string) {
  return `${start}${route}`;
}
