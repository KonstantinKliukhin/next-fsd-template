"use client";
import type { FC } from "react";

import { LogoIcon } from "@/shared/ui/icons/LogoIcon";

import { SignOutButton } from "@/features/sign-out";

export const Header: FC = () => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-x-4 border-b border-accent bg-primary px-4 shadow-sm 540:gap-x-6 540:px-6 1024:px-8">
      <LogoIcon className="w-40 text-primary-foreground" />

      <SignOutButton className="flex" variant="destructive">
        Logout
      </SignOutButton>
    </header>
  );
};
