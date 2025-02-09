import { getNextPageParam } from "./get-next-page-param";
import type { PaginationResponseDTO } from "../../../types/api.types";

describe("getNextPageParam", () => {
  it("should return null when the total number of items is reached", () => {
    const lastPage: PaginationResponseDTO<any> = {
      data: [4, 5, 6],
      meta: {
        page: 1,
        take: 3,
        total: 6,
        hasNextPage: false,
        hasPreviousPage: true,
      },
    };

    const allPages: PaginationResponseDTO<any>[] = [
      {
        data: [1, 2, 3],
        meta: {
          page: 0,
          take: 3,
          total: 6,
          hasNextPage: true,
          hasPreviousPage: false,
        },
      },
      lastPage,
    ];

    const result = getNextPageParam(lastPage, allPages, 1, [0, 1]);

    expect(result).toBeNull();
  });

  it("should return the next page number when more items are available", () => {
    const lastPage: PaginationResponseDTO<any> = {
      data: [1, 2, 3],
      meta: {
        page: 0,
        take: 3,
        total: 9,
        hasNextPage: true,
        hasPreviousPage: false,
      },
    };

    const allPages: PaginationResponseDTO<any>[] = [lastPage];

    const result = getNextPageParam(lastPage, allPages, 0, [0]);

    expect(result).toBe(1);
  });

  it("should return null when the last page has fewer items than the 'take' value", () => {
    const lastPage: PaginationResponseDTO<any> = {
      data: [7, 8],
      meta: {
        page: 2,
        take: 3,
        total: 8,
        hasNextPage: false,
        hasPreviousPage: true,
      },
    };

    const allPages: PaginationResponseDTO<any>[] = [
      {
        data: [1, 2, 3],
        meta: {
          page: 0,
          take: 3,
          total: 8,
          hasNextPage: true,
          hasPreviousPage: false,
        },
      },
      {
        data: [4, 5, 6],
        meta: {
          page: 1,
          take: 3,
          total: 8,
          hasNextPage: true,
          hasPreviousPage: true,
        },
      },
      lastPage,
    ];

    const result = getNextPageParam(lastPage, allPages, 2, [0, 1, 2]);

    expect(result).toBeNull();
  });

  it("should return null when page is 0 and total is exactly equal to 'take'", () => {
    const lastPage: PaginationResponseDTO<any> = {
      data: [1, 2, 3],
      meta: {
        page: 0,
        take: 3,
        total: 3,
        hasNextPage: false,
        hasPreviousPage: false,
      },
    };

    const allPages: PaginationResponseDTO<any>[] = [lastPage];

    const result = getNextPageParam(lastPage, allPages, 0, [0]);

    expect(result).toBeNull();
  });

  it("should correctly calculate next page when 'page' is a large number", () => {
    const lastPage: PaginationResponseDTO<any> = {
      data: [9991, 9992, 9993, 9994, 9995],
      meta: {
        page: 1998,
        take: 5,
        total: 10000,
        hasNextPage: true,
        hasPreviousPage: true,
      },
    };

    const allPages: PaginationResponseDTO<any>[] = [lastPage];

    const result = getNextPageParam(lastPage, allPages, 1998, [1998]);

    expect(result).toBe(1999);
  });

  it("should return null when 'total' is 0, regardless of other parameters", () => {
    const lastPage: PaginationResponseDTO<any> = {
      data: [],
      meta: {
        page: 0,
        take: 10,
        total: 0,
        hasNextPage: false,
        hasPreviousPage: false,
      },
    };

    const allPages: PaginationResponseDTO<any>[] = [lastPage];

    const result = getNextPageParam(lastPage, allPages, 0, [0]);

    expect(result).toBeNull();
  });

  it("should handle case where 'take' is 1 and there are multiple pages", () => {
    const lastPage: PaginationResponseDTO<any> = {
      data: [3],
      meta: {
        page: 2,
        take: 1,
        total: 5,
        hasNextPage: true,
        hasPreviousPage: true,
      },
    };

    const allPages: PaginationResponseDTO<any>[] = [
      {
        data: [1],
        meta: {
          page: 0,
          take: 1,
          total: 5,
          hasNextPage: true,
          hasPreviousPage: false,
        },
      },
      {
        data: [2],
        meta: {
          page: 1,
          take: 1,
          total: 5,
          hasNextPage: true,
          hasPreviousPage: true,
        },
      },
      lastPage,
    ];

    const result = getNextPageParam(lastPage, allPages, 2, [0, 1, 2]);

    expect(result).toBe(3);
  });

  it("should return correct next page when 'total' is exactly divisible by 'take'", () => {
    const lastPage: PaginationResponseDTO<any> = {
      data: [7, 8, 9],
      meta: {
        page: 2,
        take: 3,
        total: 9,
        hasNextPage: false,
        hasPreviousPage: true,
      },
    };

    const allPages: PaginationResponseDTO<any>[] = [
      {
        data: [1, 2, 3],
        meta: {
          page: 0,
          take: 3,
          total: 9,
          hasNextPage: true,
          hasPreviousPage: false,
        },
      },
      {
        data: [4, 5, 6],
        meta: {
          page: 1,
          take: 3,
          total: 9,
          hasNextPage: true,
          hasPreviousPage: true,
        },
      },
      lastPage,
    ];

    const result = getNextPageParam(lastPage, allPages, 2, [0, 1, 2]);

    expect(result).toBeNull();
  });

  it("should return null when 'lastPage.data' is an empty array", () => {
    const lastPage: PaginationResponseDTO<any> = {
      data: [],
      meta: {
        page: 0,
        take: 10,
        total: 0,
        hasNextPage: false,
        hasPreviousPage: false,
      },
    };

    const allPages: PaginationResponseDTO<any>[] = [lastPage];

    const result = getNextPageParam(lastPage, allPages, 0, [0]);

    expect(result).toBeNull();
  });
});
