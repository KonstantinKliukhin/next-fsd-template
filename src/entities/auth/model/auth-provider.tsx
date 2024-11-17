"use client";

import type { FC, PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useRef } from "react";
import { useStore } from "zustand/react";

import { getIsClient } from "@/shared/lib/get-is-client";

import { getAccessToken } from "../lib/get-access-token";
import type { AuthStore } from "./auth-store";
import { createAuthStore, initAuthStore } from "./auth-store";

export type AuthStoreApi = ReturnType<typeof createAuthStore>;

const AuthStoreContext = createContext<AuthStoreApi | undefined>(undefined);

export function useAuth<T = AuthStore>(
  selector: (store: AuthStore) => T = (store) => store as T
): T {
  const context = useContext(AuthStoreContext);

  if (!context) {
    throw new Error(`useAuth must be used within AuthStoreProvider`);
  }

  return useStore(context, selector);
}

export const AuthStoreProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const storeRef = useRef<AuthStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createAuthStore(initAuthStore());
  }

  useEffect(function setInitialState() {
    if (!getIsClient()) return;

    getAccessToken().then((token) => {
      const hasTokens = Boolean(token);

      storeRef.current?.getState().setIsAuthenticated(hasTokens);
    });
  }, []);

  return (
    <AuthStoreContext.Provider value={storeRef.current}>
      {children}
    </AuthStoreContext.Provider>
  );
};
