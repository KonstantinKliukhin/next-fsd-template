import type {
  DefaultError,
  FetchQueryOptions,
  QueryClient,
  QueryKey,
} from "@tanstack/react-query";

/**
 Convenient function to make queries on server and get result in simple await syntax
 */
export async function fetchQueryServer<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryClient: QueryClient,
  options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>
): Promise<TData> {
  await queryClient.prefetchQuery<TQueryFnData, TError, TData, TQueryKey>(options);

  return queryClient.getQueryData(options.queryKey) as TData;
}
