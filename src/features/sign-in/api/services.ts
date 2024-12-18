import type { SessionUser } from "@/entities/user";
import { mapSessionUser, SESSION_USER_DTO_SCHEMA } from "@/entities/user";
import { getApi } from "@/shared/api/api";
import { API_ROUTES } from "@/shared/config/api-routes";

import type { SignInDto } from "./types/sign-in.dto";

export async function logIn(dto: SignInDto): Promise<SessionUser> {
  const api = await getApi();

  const response = await api.post(API_ROUTES.SIGN_IN, dto);

  const sessionUserDto = SESSION_USER_DTO_SCHEMA.parse(response.data);

  return mapSessionUser(sessionUserDto);
}
