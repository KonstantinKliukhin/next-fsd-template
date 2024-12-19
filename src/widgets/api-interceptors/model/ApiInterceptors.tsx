"use client";
import { isAxiosError } from "axios";
import type { FC } from "react";
import { useEffect, useRef } from "react";

import { getApi } from "@/shared/api/api";
import { getIsClient } from "@/shared/lib/utils/get-is-client";

import { useSignOut } from "@/features/sign-out";

export const ApiInterceptors: FC = () => {
  const { mutateAsync: signOut } = useSignOut();
  const responseInterceptorId = useRef<number | null>(null);

  const responseErrorInterceptor = async (error: any) => {
    if (!isAxiosError(error)) return Promise.reject(error);

    if (error?.response?.status === 401) {
      await signOut();
    } else {
      return Promise.reject(error);
    }
  };

  const setupInterceptors = async () => {
    const api = await getApi();

    responseInterceptorId.current = api.interceptors.response.use(
      undefined,
      responseErrorInterceptor
    );
  };

  const clearInterceptors = async () => {
    if (!responseInterceptorId.current) return;

    const api = await getApi();

    api.interceptors.response.eject(responseInterceptorId.current);
  };

  useEffect(() => {
    if (!getIsClient()) return;

    setupInterceptors();

    return () => {
      clearInterceptors();
    };
    //eslint-disable-next-line
  }, []);

  return null;
};
