import type { SessionUser } from "../../model/types";
import type { SessionUserDto } from "../dto/session-user.dto";
import { mapUser } from "./map-user";

export function mapSessionUser(dto: SessionUserDto): SessionUser {
  return {
    user: mapUser(dto.user),
    tokens: {
      accessToken: dto.tokens.accessToken,
      refreshToken: dto.tokens.refreshToken,
    },
  };
}
