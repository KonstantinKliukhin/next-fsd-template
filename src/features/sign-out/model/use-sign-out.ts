import { useMutation, useQueryClient } from "@tanstack/react-query";

import { APP_ROUTES } from "@/shared/config/app-routes";
import { hardNavigate } from "@/shared/lib/routing/hard-navigate";

import { useAuth } from "@/entities/auth";

import { signOut } from "../api/services";

export function useSignOut() {
  const queryClient = useQueryClient();
  const { setIsAuthenticated } = useAuth();

  return useMutation({
    mutationFn: async () => {
      await signOut();

      setIsAuthenticated(false);

      queryClient.clear();
      await queryClient.cancelQueries();

      hardNavigate(APP_ROUTES.SIGN_IN);
    },
  });
}
