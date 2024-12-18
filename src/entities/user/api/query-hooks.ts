import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { infiniteQueryOptions } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/shared/api/query-keys";
import { getNextPageParam } from "@/shared/lib/get-next-page-param";

import { getCurrentUser, getUsers } from "./services";

type GetInfiniteUsersParams = {
  take: number;
};

export function useGetCurrentUser() {
  return useQuery({
    queryKey: [QUERY_KEYS.CURRENT_USER],
    queryFn: getCurrentUser,
  });
}

export const getInfiniteUsersQueryOptions = (params: GetInfiniteUsersParams) => {
  return infiniteQueryOptions({
    initialPageParam: 0,
    queryKey: [QUERY_KEYS.USERS_LIST, params],
    queryFn: ({ pageParam }) => getUsers({ page: pageParam, take: params.take }),
    getNextPageParam,
  });
};

export function useGetInfiniteUsers(params: GetInfiniteUsersParams) {
  return useInfiniteQuery(getInfiniteUsersQueryOptions(params));
}
