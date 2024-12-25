import { useMutation, useQueryClient } from "@tanstack/react-query";

import { APP_ROUTES } from "@/shared/config/app-routes";
import { useAuthNavigate } from "@/shared/lib/routing/use-auth-navigate";

import { useAuth } from "@/entities/auth";

import { signOut } from "../api/services";

export function useSignOut() {
  const queryClient = useQueryClient();
  const { setIsAuthenticated } = useAuth();
  const push = useAuthNavigate();

  return useMutation({
    mutationFn: async () => {
      await signOut();

      setIsAuthenticated(false);

      queryClient.clear();
      await queryClient.cancelQueries();

      push(APP_ROUTES.SIGN_IN);
    },
  });
}
