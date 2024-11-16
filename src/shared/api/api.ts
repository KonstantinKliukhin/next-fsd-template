import type { AxiosInstance } from "axios";

import { apiClient } from "./client-api-instance";

export async function getApi(): Promise<AxiosInstance> {
  return apiClient;
}
