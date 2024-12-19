import type { AxiosInstance } from "axios";

import { mainApi } from "./main-api-instance";
import { getIsClient } from "../lib/utils/get-is-client";

type GetApiOptions = {
  auth?: boolean;
};

export async function getApi(options: GetApiOptions = {}): Promise<AxiosInstance> {
  if (options.auth && !getIsClient()) {
    return import("./ssr-main-api-instance").then((file) => file.ssrMainApiInstance);
  }

  return mainApi;
}
