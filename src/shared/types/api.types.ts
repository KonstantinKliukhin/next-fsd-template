export type PaginationParams<T = {}> = {
  page: number;
  take?: number;
} & T;

export type PageResponse<T> = {
  meta: {
    readonly page: number;
    readonly take: number;
    readonly itemCount: number;
    readonly pageCount: number;
    readonly hasPreviousPage: boolean;
    readonly hasNextPage: boolean;
  };
  data: T;
};
