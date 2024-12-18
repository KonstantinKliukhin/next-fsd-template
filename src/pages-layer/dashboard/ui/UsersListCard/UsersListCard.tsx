"use client";
import type { FC } from "react";
import { useMemo } from "react";

import { useGetInfiniteUsers } from "@/entities/user";
import { flatPages } from "@/shared/lib/flat-pages";
import { Button } from "@/shared/ui/Button";

export const UsersListCard: FC = () => {
  const {
    data: usersData,
    isFetching,
    fetchNextPage,
  } = useGetInfiniteUsers({ take: 10 });

  const users = useMemo(() => flatPages(usersData), [usersData]);

  return (
    <div className="space-y-2 bg-card px-2 py-3">
      {users.map((user) => (
        <div key={user.id} className="border-t border-t-card-foreground px-1 py-1.5">
          {user.email}
        </div>
      ))}

      <Button onClick={() => fetchNextPage()} disabled={isFetching}>
        Load more
      </Button>
    </div>
  );
};
