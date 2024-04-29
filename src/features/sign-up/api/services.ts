import { SessionUser } from "@/entities/user";
import { apiRoutes } from "@/shared/config/api-routes";
import { ApiResponse } from "@/shared/types/api.types";

export async function signUp(
  email: string,
  password: string
): Promise<ApiResponse<SessionUser>> {
  const response = await fetch(apiRoutes.signUp, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  console.log("response: ", response);

  return (await response.json()) as ApiResponse<SessionUser>;
}
