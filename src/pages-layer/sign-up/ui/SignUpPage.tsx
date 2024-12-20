import type { FC } from "react";

import { SignUpForm } from "@/features/sign-up";

import { AuthLayout } from "@/widgets/auth-layout";

export const SignUpPage: FC = () => (
  <AuthLayout
    title="Sign Up"
    subtitle="Enter your email below to create your account"
    form={<SignUpForm />}
  />
);
