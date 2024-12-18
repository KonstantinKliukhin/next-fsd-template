import type { AxiosInstance } from "axios";

import { getIsClient } from "../lib/get-is-client";
import { mainApi } from "./main-api-instance";

type GetApiOptions = {
  auth?: boolean;
};

export async function getApi(options: GetApiOptions = {}): Promise<AxiosInstance> {
  if (options.auth && !getIsClient()) {
    return import("./ssr-main-api-instance").then((file) => file.ssrMainApiInstance);
  }

  return mainApi;
}
