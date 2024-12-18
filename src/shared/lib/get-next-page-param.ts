import type { GetNextPageParamFunction } from "@tanstack/react-query";

import type { PageResponse } from "../types/api.types";

export const getNextPageParam: GetNextPageParamFunction<number, PageResponse<any>> = (
  lastPage
) => {
  const { page, take, total } = lastPage.meta;

  const pageCount = page + 1;

  if (take * pageCount >= total || lastPage.data.length < take) return null;

  return page + 1;
};
