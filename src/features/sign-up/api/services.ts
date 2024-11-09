import type { SessionUser } from "@/entities/user";
import { API_ROUTES } from "@/shared/config/api-routes";
import type { ApiResponse } from "@/shared/types/api.types";

export async function signUp(
  email: string,
  password: string
): Promise<ApiResponse<SessionUser>> {
  const response = await fetch(API_ROUTES.SIGN_UP, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return (await response.json()) as ApiResponse<SessionUser>;
}
