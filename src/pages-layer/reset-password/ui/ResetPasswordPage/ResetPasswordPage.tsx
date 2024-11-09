import { redirect } from "next/navigation";
import type { FC } from "react";

import { ResetPasswordForm } from "@/features/reset-password";
import { APP_ROUTES } from "@/shared/config/app-routes";
import { AuthLayout } from "@/widgets/auth-layout";

type ResetPasswordPageProps = {
  searchParams: {
    code?: string;
  };
};

export const ResetPasswordPage: FC<ResetPasswordPageProps> = (props) => {
  const code = props.searchParams?.code;
  if (!code) redirect(APP_ROUTES.SIGN_IN);

  return (
    <AuthLayout
      title="Reset password"
      subtitle="Enter your email to receive link for changing password"
      form={<ResetPasswordForm code={code} />}
    />
  );
};
