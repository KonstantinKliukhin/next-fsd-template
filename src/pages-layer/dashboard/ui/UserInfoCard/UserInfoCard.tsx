"use client";
import type { FC } from "react";

import { useAuth } from "@/entities/auth";
import { useGetCurrentUser } from "@/entities/user";

export const UserInfoCard: FC = () => {
  const { data: user, isLoading, isError } = useGetCurrentUser();
  const { isAuthenticated } = useAuth();

  return (
    <div className="rounded-xl bg-card px-2 py-3">
      <h1 className="text-nowrap">Dashboard</h1>
      <p>IsAuthenticated: {String(isAuthenticated)}</p>
      <p>
        Current user: {isLoading && "Loading..."}
        {user && JSON.stringify(user)}
        {isError && "Error occurred"}
      </p>
    </div>
  );
};
