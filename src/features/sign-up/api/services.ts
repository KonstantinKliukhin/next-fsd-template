import { getApi } from "@/shared/api/api";
import { API_ROUTES } from "@/shared/config/api-routes";

import type { SessionUser } from "@/entities/user";
import { mapSessionUser, SESSION_USER_DTO_SCHEMA } from "@/entities/user";

export async function signUp(email: string, password: string): Promise<SessionUser> {
  const api = await getApi();

  const response = await api.post(API_ROUTES.SIGN_UP, { email, password });

  const dto = SESSION_USER_DTO_SCHEMA.parse(response.data);

  return mapSessionUser(dto);
}
