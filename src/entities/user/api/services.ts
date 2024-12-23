import { getApi } from "@/shared/api/api";
import { API_ROUTES } from "@/shared/config/api-routes";
import { mapPaginationData } from "@/shared/lib/api/map-pagination-data";
import { getPaginationResponseSchema } from "@/shared/lib/utils/validation-schema";
import type { PaginationData, PaginationParams } from "@/shared/types/api.types";

import type { User } from "../model/types";
import { USER_DTO_SCHEMA } from "./dto/user.dto";
import { mapUser } from "./mappers/map-user";

export async function getCurrentUser(): Promise<User> {
  const api = await getApi({ auth: true });
  const response = await api.get(API_ROUTES.ME);

  const dto = USER_DTO_SCHEMA.parse(response.data);

  return mapUser(dto);
}

export async function getUsers(params: PaginationParams): Promise<PaginationData<User>> {
  const api = await getApi();
  const response = await api.get(API_ROUTES.USERS, { params });

  const dto = getPaginationResponseSchema(USER_DTO_SCHEMA).parse(response.data);

  return mapPaginationData(dto, mapUser);
}
