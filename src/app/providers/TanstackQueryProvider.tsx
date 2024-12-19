"use client";
// Documentation: https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr

import { QueryClientProvider } from "@tanstack/react-query";
import type { FC, PropsWithChildren } from "react";

import { getQueryClient } from "@/shared/lib/api/get-query-client";

export const TanstackQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
