import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAuth } from "@/entities/auth";
import { APP_ROUTES } from "@/shared/config/app-routes";
import { hardNavigate } from "@/shared/lib/hard-navigate";

import { signOut } from "../api/services";

export function useSignOut() {
  const queryClient = useQueryClient();
  const { setIsAuthenticated } = useAuth();

  return useMutation({
    mutationFn: async () => {
      await signOut();

      queryClient.clear();
      await queryClient.cancelQueries();

      setIsAuthenticated(false);

      hardNavigate(APP_ROUTES.SIGN_IN);
    },
  });
}
