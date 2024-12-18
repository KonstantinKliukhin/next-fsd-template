import { getApi } from "@/shared/api/api";
import { API_ROUTES } from "@/shared/config/api-routes";

import type { User } from "../model/types";
import { USER_DTO_SCHEMA } from "./dto/user.dto";
import { mapUser } from "./mappers/map-user";

export async function getCurrentUser(): Promise<User> {
  const api = await getApi({ auth: true });
  const response = await api.get(API_ROUTES.ME);

  const dto = USER_DTO_SCHEMA.parse(response.data);

  return mapUser(dto);
}
