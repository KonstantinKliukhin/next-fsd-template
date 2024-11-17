import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = () => {
  cookies().delete("access-token");
  cookies().delete("refresh-token");

  return NextResponse.json({ ok: true });
};
