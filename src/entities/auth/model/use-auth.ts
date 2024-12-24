import { useContext } from "react";
import { useStore } from "zustand/react";

import { AuthStoreContext } from "./auth-context";
import type { AuthStore } from "./auth-store";

export function useAuth<T = AuthStore>(
  selector: (store: AuthStore) => T = (store) => store as T
): T {
  const context = useContext(AuthStoreContext);

  if (!context) {
    throw new Error(`useAuth must be used within AuthStoreProvider`);
  }

  return useStore(context, selector);
}
