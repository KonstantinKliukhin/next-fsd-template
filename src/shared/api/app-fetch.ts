import { getIsClient } from "../lib/get-is-client";
import { clientAppFetch } from "./client-app-fetch";
import { serverAppFetch } from "./server-app-fetch.server";

export async function appFetch(
  ...args: Parameters<typeof fetch>
): Promise<ReturnType<typeof fetch>> {
  const isClient = getIsClient();

  if (isClient) {
    return clientAppFetch(...args);
  } else {
    return serverAppFetch(...args);
  }
}
