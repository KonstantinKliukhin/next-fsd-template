import { getApi } from "@/shared/api/api";
import { API_ROUTES } from "@/shared/config/api-routes";

type ResetPasswordParam = {
  resetPasswordCode: string;
  password: string;
};

export async function resetPassword({
  resetPasswordCode,
  password,
}: ResetPasswordParam): Promise<void> {
  const api = await getApi();

  return api.post(API_ROUTES.CONFIRM_RESET_PASSWORD, { resetPasswordCode, password });
}
