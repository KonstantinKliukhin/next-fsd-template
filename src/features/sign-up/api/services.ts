import { getApi } from "@/shared/api/api";
import { API_ROUTES } from "@/shared/config/api-routes";

import type { User } from "@/entities/user";
import { mapUser, USER_DTO_SCHEMA } from "@/entities/user";

import type { SignUpDto } from "./dto/sign-up.dto";

export async function signUp(signUpDto: SignUpDto): Promise<User> {
  const api = await getApi();

  const response = await api.post(API_ROUTES.SIGN_UP, signUpDto);

  const userDto = USER_DTO_SCHEMA.parse(response.data);

  return mapUser(userDto);
}
