import { getApi } from "@/shared/api/api";
import { API_ROUTES } from "@/shared/config/api-routes";

export async function signOut() {
  const api = await getApi();

  return api.post(API_ROUTES.SIGN_OUT);
}
