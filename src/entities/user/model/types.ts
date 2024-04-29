export type User = {
  email: string;
  id: string;
  role: UserRoles;
};

export type SessionUser = {
  user: User;
  token: string;
  refreshToken: string;
};

export type UserRoles = "admin" | "user";
