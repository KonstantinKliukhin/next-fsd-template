import { getApi } from "@/shared/api/api";
import { API_ROUTES } from "@/shared/config/api-routes";

export async function getIsAuthenticated(): Promise<boolean> {
  const api = await getApi();

  const { data } = await api.get<{ isAuthenticated: boolean }>(
    API_ROUTES.IS_AUTHENTICATED
  );

  return data.isAuthenticated;
}
