export type User = {
  email: string;
  id: string;
  role: UserRoles;
};

export type SessionUser = {
  user: User;
  tokens: {
    refreshToken: string;
    accessToken: string;
  };
};

export type UserRoles = "admin" | "user";
