import type { z } from "zod";

import type { RESET_PASSWORD_SCHEMA } from "./form-schema";

export type ResetPasswordFormType = z.infer<typeof RESET_PASSWORD_SCHEMA>;
