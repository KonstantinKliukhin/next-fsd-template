import { useMutation } from "@tanstack/react-query";

import { resetPassword } from "./services";

export function useResetPassword() {
  return useMutation({
    mutationFn: resetPassword,
  });
}
