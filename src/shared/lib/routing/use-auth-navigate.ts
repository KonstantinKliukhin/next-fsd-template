import { useRouter } from "next/navigation";
import { useCallback, useId } from "react";

/**
 * This is workaround for navigation after cookies are changed
 * By default there is a bug in Next.js which breaks behaviour of navigation
 * after setting new cookies. This function adds unique search parameter to
 * fix navigation behaviour
 */
export function useAuthNavigate() {
  const uniqueId = useId();
  const { push } = useRouter();

  return useCallback(
    (url: string) => {
      const symbol = url.includes("?") ? "&" : "?";

      push(`${url}${symbol}auth-id=${uniqueId}`);
    },
    [push, uniqueId]
  );
}
