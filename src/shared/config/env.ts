import { createEnv } from "@t3-oss/env-nextjs";
import { nativeEnum, string } from "zod";

import { AppEnvironment } from "./app-environment";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_API_URL: string().url().min(1, "NEXT_PUBLIC_APP_API_URL is missed"),
    NEXT_PUBLIC_APP_URL: string().url().min(1, "NEXT_PUBLIC_APP_URL is missed"),
    NEXT_PUBLIC_ENVIRONMENT: nativeEnum(AppEnvironment, {
      required_error: `NEXT_PUBLIC_ENVIRONMENT is missed`,
      invalid_type_error: `NEXT_PUBLIC_ENVIRONMENT can be only one of: ${Object.values(AppEnvironment)}`,
    }),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APP_API_URL: process.env.NEXT_PUBLIC_APP_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
  },
});
