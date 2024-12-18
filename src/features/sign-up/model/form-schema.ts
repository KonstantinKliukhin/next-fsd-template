import { object, string } from "zod";

import { getPasswordSchema } from "@/shared/lib/validation-schema";

export const SIGN_UP_SCHEMA = object({
  email: string().email().min(1, "Required"),
  password: getPasswordSchema(),
  confirmPassword: getPasswordSchema(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
