import type { z } from "zod";

import type { FORGOT_PASSWORD_SCHEMA } from "./form-schema";

export type ForgotPasswordFormType = z.infer<typeof FORGOT_PASSWORD_SCHEMA>;
