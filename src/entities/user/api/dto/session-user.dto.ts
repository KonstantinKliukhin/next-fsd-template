import { z } from "zod";

import { USER_DTO_SCHEMA } from "./user.dto";

export const SESSION_USER_DTO_SCHEMA = z.object({
  user: USER_DTO_SCHEMA,
  tokens: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
  }),
});

export type SessionUserDto = z.infer<typeof SESSION_USER_DTO_SCHEMA>;
