import { z } from "zod";

import { forgotPasswordSchema } from "./form-schema";

export type ForgotPasswordFormType = z.infer<typeof forgotPasswordSchema>;
