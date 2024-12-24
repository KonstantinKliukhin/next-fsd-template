import type { UserRoles } from "./constants";

export type User = {
  email: string;
  id: Id;
  role: UserRoles;
};
