import { object } from "zod";

import { getPasswordSchema } from "@/shared/lib/validation-schema";

export const RESET_PASSWORD_SCHEMA = object({
  password: getPasswordSchema(),
  confirmPassword: getPasswordSchema(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
