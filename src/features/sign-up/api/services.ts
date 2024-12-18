import type { SessionUser } from "@/entities/user";
import { getApi } from "@/shared/api/api";
import { API_ROUTES } from "@/shared/config/api-routes";

export async function signUp(email: string, password: string): Promise<SessionUser> {
  const api = await getApi();

  const response = await api.post<SessionUser>(API_ROUTES.SIGN_UP, { email, password });

  return response.data;
}
