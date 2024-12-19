import { getIsClient } from "../utils/get-is-client";
import { getFullAppRoute } from "./get-full-app-route";

export function hardNavigate(route: string) {
  if (!getIsClient()) return;

  window.location.href = getFullAppRoute(route);
}
