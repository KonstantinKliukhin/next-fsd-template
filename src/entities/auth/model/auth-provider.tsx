"use client";

import type { FC, PropsWithChildren } from "react";
import { useEffect, useRef } from "react";

import { getIsClient } from "@/shared/lib/utils/get-is-client";

import type { AuthStoreApi } from "./auth-context";
import { AuthStoreContext } from "./auth-context";
import { createAuthStore, initAuthStore } from "./auth-store";
import { getIsAuthenticated } from "../api/services";

export const AuthStoreProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const storeRef = useRef<AuthStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createAuthStore(initAuthStore());
  }

  useEffect(function setInitialState() {
    if (!getIsClient()) return;

    getIsAuthenticated().then((isAuthenticated) => {
      storeRef.current?.getState().setIsAuthenticated(isAuthenticated);
    });
  }, []);

  return (
    <AuthStoreContext.Provider value={storeRef.current}>
      {children}
    </AuthStoreContext.Provider>
  );
};
