import type { z } from "zod";

import type { SIGN_UP_SCHEMA } from "./form-schema";

export type SignUpFormType = z.infer<typeof SIGN_UP_SCHEMA>;
