import type { UserRoles } from "./constants";

export type User = {
  email: string;
  id: Id;
  role: UserRoles;
};

export type SessionUser = {
  user: User;
  tokens: {
    refreshToken: string;
    accessToken: string;
  };
};
