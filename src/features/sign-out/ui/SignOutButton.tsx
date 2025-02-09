"use client";
import type { ComponentProps, FC } from "react";
import { useCallback } from "react";

import { Button } from "@/shared/ui/Button";

import { useSignOut } from "../model/use-sign-out";

type LogoutButtonProps = ComponentProps<typeof Button>;

export const SignOutButton: FC<LogoutButtonProps> = (props) => {
  const { mutate: signOut } = useSignOut();

  const onSignOut = useCallback(() => signOut(), [signOut]);

  return <Button onClick={onSignOut} {...props} />;
};
