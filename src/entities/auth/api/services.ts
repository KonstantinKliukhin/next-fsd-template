import { getApi } from "@/shared/api/api";
import { API_ROUTES } from "@/shared/config/api-routes";

import { IS_AUTHENTICATED_DTO_SCHEMA } from "./dto/is-authenticated.dto";
import { mapIsAuthenticated } from "./mappers/map-is-authenticated";

export async function getIsAuthenticated(): Promise<boolean> {
  const api = await getApi();

  const response = await api.get<{ isAuthenticated: boolean }>(
    API_ROUTES.IS_AUTHENTICATED
  );

  const dto = IS_AUTHENTICATED_DTO_SCHEMA.parse(response.data);

  return mapIsAuthenticated(dto);
}
