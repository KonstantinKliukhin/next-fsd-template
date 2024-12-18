import { z } from "zod";

import {
  AT_LEAST_ONE_LOWERCASE_LETTER_REG_EXO,
  AT_LEAST_ONE_NUMBER_REG_EXP,
  AT_LEAST_ONE_SPECIAL_CHARACTER_REG_EXP,
  AT_LEAST_ONE_UPPERCASE_LETTER_REG_EXP,
  HAS_SPACES_REG_EXP,
} from "../constants/reg-exps";

export const getPasswordSchema = () => {
  return z
    .string()
    .regex(
      AT_LEAST_ONE_SPECIAL_CHARACTER_REG_EXP,
      "At least one special character required"
    )
    .regex(
      AT_LEAST_ONE_LOWERCASE_LETTER_REG_EXO,
      "At least one lowercase letter required"
    )
    .regex(
      AT_LEAST_ONE_UPPERCASE_LETTER_REG_EXP,
      "At least one uppercase letter required"
    )
    .regex(AT_LEAST_ONE_NUMBER_REG_EXP, "At least one number required")
    .regex(HAS_SPACES_REG_EXP, "Password must not contain any spaces")
    .min(8, "Password must be at least 8 characters")
    .max(40, "Password must be maximum of 40 characters");
};

export const getPageResponseSchema = <T extends z.ZodObject<any>>(dataSchema: T) => {
  return z.object({
    meta: z.object({
      page: z.number(),
      take: z.number(),
      total: z.number(),
      hasPreviousPage: z.boolean(),
      hasNextPage: z.boolean(),
    }),
    data: z.array(dataSchema),
  });
};
