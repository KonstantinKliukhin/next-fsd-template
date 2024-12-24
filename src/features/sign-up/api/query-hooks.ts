import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/shared/api/query-keys";

import { signUp } from "./services";

export function useSignUp() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.CURRENT_USER], data);
    },
  });
}
