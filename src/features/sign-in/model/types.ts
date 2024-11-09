import type { z } from "zod";

import type { SIGN_IN_SCHEMA } from "./form-schema";

export type SignInFormType = z.infer<typeof SIGN_IN_SCHEMA>;
