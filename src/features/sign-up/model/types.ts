import { z } from "zod";

import { signUpSchema } from "./form-schema";

export type SignUpFormType = z.infer<typeof signUpSchema>;
