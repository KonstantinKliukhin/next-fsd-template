import { getApi } from "@/shared/api/api";
import { API_ROUTES } from "@/shared/config/api-routes";

export async function signOut(): Promise<void> {
  const api = await getApi();

  await api.post(API_ROUTES.SIGN_OUT);
}
