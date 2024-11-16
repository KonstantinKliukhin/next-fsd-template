import { getApi } from "@/shared/api/api";
import { API_ROUTES } from "@/shared/config/api-routes";

export async function sendForgotPasswordEmail(email: string): Promise<void> {
  const api = await getApi();

  return api.post(API_ROUTES.REQUEST_RESET_PASSWORD, { email });
}
