export type PaginationParams<T = {}> = {
  page: number;
  take?: number;
} & T;

export type PaginationResponseDTO<T> = {
  meta: {
    readonly page: number;
    readonly take: number;
    readonly total: number;
    readonly hasPreviousPage: boolean;
    readonly hasNextPage: boolean;
  };
  data: T[];
};

export type PaginationData<T> = {
  meta: {
    readonly page: number;
    readonly take: number;
    readonly total: number;
    readonly hasPreviousPage: boolean;
    readonly hasNextPage: boolean;
  };
  data: T[];
};
