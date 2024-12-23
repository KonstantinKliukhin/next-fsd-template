import type { PaginationResponseDTO } from "../../../types/api.types";
import type { PaginationData } from "../../../types/api.types";

export function mapPaginationData<DtoT, EntityT>(
  dto: PaginationResponseDTO<DtoT>,
  mapEntity: (dto: DtoT) => EntityT
): PaginationData<EntityT> {
  return {
    meta: {
      page: dto.meta.page,
      take: dto.meta.take,
      total: dto.meta.total,
      hasPreviousPage: dto.meta.hasPreviousPage,
      hasNextPage: dto.meta.hasNextPage,
    },
    data: dto.data.map(mapEntity),
  };
}
