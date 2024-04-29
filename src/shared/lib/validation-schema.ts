import { string } from "zod";

export const passwordSchema = () => {
  return string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!?@#$^&*:|]{8,16}$/,
      "Password must have at least 1 lowercase, 1 uppercase characters and 1 digit"
    )
    .min(8, "Password must be at least 7 characters")
    .max(16, "Password must be maximum of 16 characters");
};
