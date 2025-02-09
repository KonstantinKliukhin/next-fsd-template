import { mapPaginationData } from "./map-pagination-data";
import type { PaginationResponseDTO } from "../../../types/api.types";

describe("mapPaginationData", () => {
  it("should correctly map pagination metadata for a valid input", () => {
    const mockDto: PaginationResponseDTO<number> = {
      meta: {
        page: 1,
        take: 10,
        total: 100,
        hasPreviousPage: false,
        hasNextPage: true,
      },
      data: [1, 2, 3],
    };

    const mockMapEntity = (num: number) => num * 2;

    const result = mapPaginationData(mockDto, mockMapEntity);

    expect(result.meta).toEqual(mockDto.meta);
    expect(result.data).toEqual([2, 4, 6]);
  });

  it("should handle an empty data array", () => {
    const mockDto: PaginationResponseDTO<number> = {
      meta: {
        page: 1,
        take: 10,
        total: 0,
        hasPreviousPage: false,
        hasNextPage: false,
      },
      data: [],
    };

    const mockMapEntity = (num: number) => num * 2;

    const result = mapPaginationData(mockDto, mockMapEntity);

    expect(result.meta).toEqual(mockDto.meta);
    expect(result.data).toEqual([]);
  });

  it("should correctly apply the mapEntity function to each item in the data array", () => {
    const mockDto: PaginationResponseDTO<string> = {
      meta: {
        page: 1,
        take: 10,
        total: 3,
        hasPreviousPage: false,
        hasNextPage: false,
      },
      data: ["apple", "banana", "cherry"],
    };

    const mockMapEntity = (str: string) => str.toUpperCase();

    const result = mapPaginationData(mockDto, mockMapEntity);

    expect(result.data).toEqual(["APPLE", "BANANA", "CHERRY"]);
    expect(result.meta).toEqual(mockDto.meta);
  });
});
