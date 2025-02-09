import { getApi } from "@/shared/api/api";
import { API_ROUTES } from "@/shared/config/api-routes";

import type { User } from "@/entities/user";
import { mapUser, USER_DTO_SCHEMA } from "@/entities/user";

import type { SignInDto } from "./dto/sign-in.dto";

export async function signIn(dto: SignInDto): Promise<User> {
  const api = await getApi();

  const response = await api.post(API_ROUTES.SIGN_IN, dto);

  const sessionUserDto = USER_DTO_SCHEMA.parse(response.data);

  return mapUser(sessionUserDto);
}
