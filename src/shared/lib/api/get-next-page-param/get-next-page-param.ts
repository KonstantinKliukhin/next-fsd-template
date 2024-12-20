import type { GetNextPageParamFunction } from "@tanstack/react-query";

import type { PaginationResponse } from "../../../types/api.types";

export const getNextPageParam: GetNextPageParamFunction<
  number,
  PaginationResponse<any>
> = (lastPage) => {
  const { page, take, total } = lastPage.meta;

  const pageCount = page + 1;

  if (take * pageCount >= total || lastPage.data.length < take) return null;

  return page + 1;
};
