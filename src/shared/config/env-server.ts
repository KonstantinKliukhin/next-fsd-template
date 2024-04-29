import zod, { z } from "zod";

const envServerSchema = z.object({
  NEXTAUTH_URL: zod.string(),
  NEXTAUTH_SECRET: zod.string(),
});

export const envServer = envServerSchema.parse({
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
});
