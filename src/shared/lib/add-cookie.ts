import { getIsClient } from "./get-is-client";

export function addCookie(name: string, value: string, expires: string) {
  if (!getIsClient()) return;
  document.cookie = name + "=" + value + "; expires=" + expires + "; path=/;secure=true";
}
