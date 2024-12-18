import { z } from "zod";

import { UserRoles } from "../../model/constants";

export const USER_DTO_SCHEMA = z.object({
  email: z.string(),
  id: z.string(),
  role: z.nativeEnum(UserRoles),
});

export type UserDto = z.infer<typeof USER_DTO_SCHEMA>;
