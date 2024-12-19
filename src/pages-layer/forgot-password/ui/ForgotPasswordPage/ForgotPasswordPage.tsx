"use client";
import type { FC } from "react";

import { ForgotPasswordForm } from "@/features/send-forgot-password-email";

import { AuthLayout } from "@/widgets/auth-layout";

export const ForgotPasswordPage: FC = () => (
  <AuthLayout
    title="Reset password"
    subtitle="Enter new password"
    form={<ForgotPasswordForm />}
  />
);
