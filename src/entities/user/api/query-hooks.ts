"use client";
import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/shared/api/query-keys";

import { getCurrentUser } from "./services";

export function useGetCurrentUser() {
  return useQuery({
    queryKey: [QUERY_KEYS.CURRENT_USER],
    queryFn: getCurrentUser,
  });
}
