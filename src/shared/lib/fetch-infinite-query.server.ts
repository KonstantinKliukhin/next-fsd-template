import type { DefaultError, QueryClient, QueryKey } from "@tanstack/react-query";
import type { FetchInfiniteQueryOptions } from "@tanstack/react-query";

/**
 Convenient function to make infinite queries on server and get result in simple await syntax
 */
export async function fetchInfiniteQueryServer<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = unknown,
>(
  queryClient: QueryClient,
  options: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey, TPageParam>
): Promise<TData> {
  await queryClient.prefetchInfiniteQuery<
    TQueryFnData,
    TError,
    TData,
    TQueryKey,
    TPageParam
  >(options);

  return queryClient.getQueryData(options.queryKey) as TData;
}
