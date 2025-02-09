import { useMutation } from "@tanstack/react-query";

import { sendForgotPasswordEmail } from "./services";

export function useSendForgotPasswordEmail() {
  return useMutation({
    mutationFn: sendForgotPasswordEmail,
  });
}
