import type { IsAuthenticatedDto } from "../dto/is-authenticated.dto";

export function mapIsAuthenticated(dto: IsAuthenticatedDto): boolean {
  return dto.isAuthenticated;
}
