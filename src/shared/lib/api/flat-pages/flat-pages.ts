import type { InfiniteData } from "@tanstack/react-query";

import type { PaginationResponse } from "../../../types/api.types";

export function flatPages<T>(data: InfiniteData<PaginationResponse<T>> | undefined): T[] {
  return data?.pages.flatMap((page) => page.data) || [];
}
