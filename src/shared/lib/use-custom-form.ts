"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const useCustomForm = ((...args) => {
  const defaultValues = args?.[0]?.defaultValues;
  const form = useForm(...args);
  const { reset } = form;

  useEffect(() => {
    if (typeof defaultValues === "object") {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return form;
}) as typeof useForm;
