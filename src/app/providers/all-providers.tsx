"use client";
import { SessionProvider } from "next-auth/react";
import type { FC, PropsWithChildren } from "react";

import { TanstackQueryProvider } from "./tanstack-query-provider";

export const AllProviders: FC<PropsWithChildren> = ({ children }) => (
  <SessionProvider>
    <TanstackQueryProvider>{children}</TanstackQueryProvider>
  </SessionProvider>
);
