import type { z } from "zod";

import { resetPasswordSchema } from "./form-schema";

export type ResetPasswordFormType = z.infer<typeof resetPasswordSchema>;
