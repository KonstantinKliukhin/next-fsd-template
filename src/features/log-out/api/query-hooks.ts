import { useMutation } from "@tanstack/react-query";

import { logOut } from "./services";

export function useLogout() {
  return useMutation({
    mutationFn: logOut,
  });
}
