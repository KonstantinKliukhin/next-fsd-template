import { appFetch } from "@/shared/api/app-fetch";
import { API_ROUTES } from "@/shared/config/api-routes";
import type { ApiResponse } from "@/shared/types/api.types";

import type { User } from "../model/types";

export async function getCurrentUser(): Promise<ApiResponse<User>> {
  const response = await appFetch(API_ROUTES.ME);

  return (await response.json()) as ApiResponse<User>;
}
