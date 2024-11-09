import type { FC } from "react";

import { SignInForm } from "@/features/sign-in";
import { AuthLayout } from "@/widgets/auth-layout";

export const SignInPage: FC = () => (
  <AuthLayout
    title="Sign In"
    subtitle="Enter your email and password to sign in"
    form={<SignInForm />}
  />
);
