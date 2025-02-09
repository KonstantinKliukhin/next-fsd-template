import type { User } from "@/entities/user";

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type MockedUser = {
  user: User & {
    password: string;
    secretCode?: string;
  };
  tokens: Tokens;
};

export const users: MockedUser[] = [];
