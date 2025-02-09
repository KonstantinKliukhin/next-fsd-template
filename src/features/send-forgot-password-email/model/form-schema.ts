import { object, string } from "zod";

export const FORGOT_PASSWORD_SCHEMA = object({
  email: string().email().min(1, "Required"),
});
