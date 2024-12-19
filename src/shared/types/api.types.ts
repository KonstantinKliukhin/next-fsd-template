export type PaginationParams<T = {}> = {
  page: number;
  take?: number;
} & T;

export type PaginationResponse<T> = {
  meta: {
    readonly page: number;
    readonly take: number;
    readonly total: number;
    readonly hasPreviousPage: boolean;
    readonly hasNextPage: boolean;
  };
  data: T[];
};
