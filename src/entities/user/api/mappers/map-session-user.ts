import { mapUser } from "./map-user";
import type { SessionUser } from "../../model/types";
import type { SessionUserDto } from "../dto/session-user.dto";

export function mapSessionUser(dto: SessionUserDto): SessionUser {
  return {
    user: mapUser(dto.user),
    tokens: {
      accessToken: dto.tokens.accessToken,
      refreshToken: dto.tokens.refreshToken,
    },
  };
}
