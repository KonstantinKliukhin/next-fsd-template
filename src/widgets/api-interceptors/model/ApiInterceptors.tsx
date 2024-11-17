"use client";
import { isAxiosError } from "axios";
import type { FC } from "react";
import { useEffect } from "react";

import { useSignOut } from "@/features/sign-out";
import { getApi } from "@/shared/api/api";

export const ApiInterceptors: FC = () => {
  const { mutateAsync: signOut } = useSignOut();

  const responseInterceptor = async (error: any) => {
    if (!isAxiosError(error)) return Promise.reject(error);

    if (error?.response?.status === 401) {
      await signOut();
    } else {
      return Promise.reject(error);
    }
  };

  useEffect(function setupInterceptors() {
    let responseInterceptorId: number;

    getApi().then((api) => {
      responseInterceptorId = api.interceptors.response.use(
        undefined,
        responseInterceptor
      );
    });

    return () => {
      getApi().then((api) => {
        api.interceptors.response.eject(responseInterceptorId);
      });
    };
    //eslint-disable-next-line
  }, []);

  return null;
};
