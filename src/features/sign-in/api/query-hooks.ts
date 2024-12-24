import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/shared/api/query-keys";

import { signIn } from "./services";

export function useSignIn() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.CURRENT_USER], data);
    },
  });
}
