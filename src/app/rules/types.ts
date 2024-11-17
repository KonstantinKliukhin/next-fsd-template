import type { NextResponse } from "next/server";

import type { User } from "@/entities/user";

export type RuleProps = {
  readonly user?: User | null;
  readonly nextUrl: string;
  readonly redirect: (path: string) => NextResponse<any>;
};

export type Rule = (props: RuleProps) => NextResponse<any> | void;

export type RouteConfig = {
  rules: Rule[];
  url: string;
};
