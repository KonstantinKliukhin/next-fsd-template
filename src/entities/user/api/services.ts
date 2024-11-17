import { getApi } from "@/shared/api/api";
import { API_ROUTES } from "@/shared/config/api-routes";

import type { User } from "../model/types";

export async function getCurrentUser(): Promise<User> {
  const api = await getApi({ auth: true });
  const response = await api.get<User>(API_ROUTES.ME);

  return response.data;
}
