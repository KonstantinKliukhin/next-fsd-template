"use client";
import type { FC, PropsWithChildren } from "react";

import { AuthStoreProvider } from "@/entities/auth";

import { TanstackQueryProvider } from "./TanstackQueryProvider";

export const AllProviders: FC<PropsWithChildren> = ({ children }) => (
  <TanstackQueryProvider>
    <AuthStoreProvider>{children}</AuthStoreProvider>
  </TanstackQueryProvider>
);
