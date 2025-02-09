import type { User } from "../../model/types";
import type { UserDto } from "../dto/user.dto";

export function mapUser(dto: UserDto): User {
  return {
    id: dto.id,
    email: dto.email,
    role: dto.role,
  };
}
