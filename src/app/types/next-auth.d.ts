import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: import("../../entities/user/model/types").SessionUser;
  }

  interface DefaultUser {}
  interface User extends import("../../entities/user/model/types").SessionUser {}
}

declare module "next-auth/jwt" {
  interface JWT {
    user: import("../../entities/user/model/types").SessionUser;
  }
}
