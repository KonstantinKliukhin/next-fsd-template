import { object, string } from "zod";

import { getPasswordSchema } from "@/shared/lib/validation-schema";

export const SIGN_IN_SCHEMA = object({
  email: string().email().min(1, "Required"),
  password: getPasswordSchema(),
});
