import { API_ROUTES } from "@/shared/config/api-routes";
import type { ApiResponse } from "@/shared/types/api.types";

export async function sendForgotPasswordEmail(email: string): Promise<ApiResponse<void>> {
  const result = await fetch(API_ROUTES.REQUEST_RESET_PASSWORD, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!result.ok) {
    return (await result.json()) as ApiResponse<void>;
  }
}
