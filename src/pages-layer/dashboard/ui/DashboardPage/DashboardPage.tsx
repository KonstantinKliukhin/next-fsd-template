import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import type { FC } from "react";

import { getInfiniteUsersQueryOptions } from "@/entities/user";
import { fetchInfiniteQueryServer } from "@/shared/lib/fetch-infinite-query.server";
import { getQueryClient } from "@/shared/lib/get-query-client";

import { UserInfoCard } from "../UserInfoCard/UserInfoCard";
import { UsersListCard } from "../UsersListCard/UsersListCard";

export const DashboardPage: FC = async () => {
  const queryClient = getQueryClient();

  await Promise.allSettled([
    fetchInfiniteQueryServer(queryClient, getInfiniteUsersQueryOptions({ take: 10 })),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserInfoCard />

      <UsersListCard />
    </HydrationBoundary>
  );
};
