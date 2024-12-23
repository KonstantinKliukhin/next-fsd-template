import type { InfiniteData } from "@tanstack/react-query";

import type { PaginationResponseDTO } from "../../../types/api.types";

export function flatPages<T>(
  data: InfiniteData<PaginationResponseDTO<T>> | undefined
): T[] {
  return data?.pages.flatMap((page) => page.data) || [];
}
