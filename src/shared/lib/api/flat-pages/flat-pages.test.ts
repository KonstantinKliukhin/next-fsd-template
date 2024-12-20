import type { InfiniteData } from "@tanstack/react-query";

import { flatPages } from "./flat-pages";
import type { PaginationResponse } from "../../../types/api.types";

describe("flatPages", () => {
  it("should return an empty array when data is undefined", () => {
    const result = flatPages(undefined);
    expect(result).toEqual([]);
  });

  it("should flatten pages and return all items", () => {
    const mockData: InfiniteData<PaginationResponse<number>> = {
      pages: [
        {
          meta: {
            page: 1,
            take: 3,
            total: 6,
            hasPreviousPage: false,
            hasNextPage: true,
          },
          data: [1, 2, 3],
        },
        {
          meta: {
            page: 2,
            take: 3,
            total: 6,
            hasPreviousPage: true,
            hasNextPage: false,
          },
          data: [4, 5, 6],
        },
      ],
      pageParams: [null, 1],
    };

    const result = flatPages(mockData);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle empty pages", () => {
    const mockData: InfiniteData<PaginationResponse<string>> = {
      pages: [
        {
          meta: {
            page: 1,
            take: 10,
            total: 0,
            hasPreviousPage: false,
            hasNextPage: false,
          },
          data: [],
        },
      ],
      pageParams: [null],
    };

    const result = flatPages(mockData);
    expect(result).toEqual([]);
  });

  it("should handle mixed content types", () => {
    const mockData: InfiniteData<PaginationResponse<string | number>> = {
      pages: [
        {
          meta: {
            page: 1,
            take: 2,
            total: 4,
            hasPreviousPage: false,
            hasNextPage: true,
          },
          data: ["a", "b"],
        },
        {
          meta: {
            page: 2,
            take: 2,
            total: 4,
            hasPreviousPage: true,
            hasNextPage: false,
          },
          data: [1, 2],
        },
      ],
      pageParams: [null, 1],
    };

    const result = flatPages(mockData);
    expect(result).toEqual(["a", "b", 1, 2]);
  });
});
