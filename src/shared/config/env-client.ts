import { z } from "zod";

const envClientSchema = z.object({
  API_URL: z.string().url(),
  APP_URL: z.string().url(),
});

export const envClient = envClientSchema.parse({
  API_URL: process.env.NEXT_PUBLIC_APP_API_URL,
  APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});
