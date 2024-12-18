import type { InfiniteData } from "@tanstack/react-query";

import type { PageResponse } from "../types/api.types";

export function flatPages<T>(data: InfiniteData<PageResponse<T>> | undefined): T[] {
  return data?.pages.flatMap((page) => page.data) || [];
}
