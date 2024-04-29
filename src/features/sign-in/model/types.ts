import { z } from "zod";

import { signInSchema } from "./form-schema";

export type SignInFormType = z.infer<typeof signInSchema>;
