import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import type { PaginationResponse } from "@/shared/types/api.types";

import type { UserDto } from "@/entities/user";
import { UserRoles } from "@/entities/user";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  const page = Number(searchParams.get("page"));
  const take = Number(searchParams.get("take"));
  const startNumber = page * take;

  const users: UserDto[] = Array.from({ length: 10 }).map((_, index) => ({
    id: String(index + startNumber),
    email: `user+${index + startNumber}@gmail.com`,
    role: index % 2 === 0 ? UserRoles.User : UserRoles.Admin,
  }));

  const response: PaginationResponse<UserDto> = {
    data: users,
    meta: {
      hasNextPage: true,
      hasPreviousPage: false,
      total: 1000000,
      page,
      take,
    },
  };

  return NextResponse.json(response);
};
