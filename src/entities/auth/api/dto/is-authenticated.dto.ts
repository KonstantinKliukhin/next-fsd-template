import { z } from "zod";

export const IS_AUTHENTICATED_DTO_SCHEMA = z.object({
  isAuthenticated: z.boolean(),
});

export type IsAuthenticatedDto = z.infer<typeof IS_AUTHENTICATED_DTO_SCHEMA>;
