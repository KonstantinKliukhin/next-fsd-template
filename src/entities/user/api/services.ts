import { getApi } from "@/shared/api/api";
import { API_ROUTES } from "@/shared/config/api-routes";
import { getPageResponseSchema } from "@/shared/lib/validation-schema";
import type { PageResponse, PaginationParams } from "@/shared/types/api.types";

import type { User } from "../model/types";
import { USER_DTO_SCHEMA } from "./dto/user.dto";
import { mapUser } from "./mappers/map-user";

export async function getCurrentUser(): Promise<User> {
  const api = await getApi({ auth: true });
  const response = await api.get(API_ROUTES.ME);

  const dto = USER_DTO_SCHEMA.parse(response.data);

  return mapUser(dto);
}

export async function getUsers(params: PaginationParams): Promise<PageResponse<User>> {
  const api = await getApi();
  const response = await api.get(API_ROUTES.USERS, { params });

  const dto = getPageResponseSchema(USER_DTO_SCHEMA).parse(response.data);

  return { ...dto, data: dto.data.map(mapUser) };
}
