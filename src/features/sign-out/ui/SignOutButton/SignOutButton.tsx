"use client";
import type { ComponentProps } from "react";
import { memo, useCallback } from "react";

import { Button } from "@/shared/ui/Button";

import { useSignOut } from "../../model/use-sign-out";

type LogoutButtonProps = ComponentProps<typeof Button>;

export const SignOutButton = memo<LogoutButtonProps>(function SignOutButton(props) {
  const { mutate: signOut } = useSignOut();

  const onSignOut = useCallback(() => signOut(), [signOut]);

  return <Button onClick={onSignOut} {...props} />;
});
