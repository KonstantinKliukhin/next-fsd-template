import { createJSONStorage, persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

import { LOCAL_STORAGE_KEYS } from "@/shared/config/local-storage-keys";

export type AuthState = {
  isAuthenticated: boolean;
};

export type AuthActions = {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

export type AuthStore = AuthState & AuthActions;

const DEFAULT_AUTH_STATE: AuthState = {
  isAuthenticated: false,
};

export function initAuthStore(): AuthState {
  return DEFAULT_AUTH_STATE;
}

export function createAuthStore(initialState: AuthState = DEFAULT_AUTH_STATE) {
  return createStore<AuthStore>()(
    persist(
      (set) => ({
        ...initialState,
        setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
      }),
      {
        name: LOCAL_STORAGE_KEYS.AUTH_STORAGE,
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
}
