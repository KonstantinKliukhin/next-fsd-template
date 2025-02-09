"use client";
import type { ReactNode } from "react";
import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";

import { FormFieldProvider } from "./providers/FormFieldProvider";

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: ControllerProps<TFieldValues, TName>
): ReactNode => {
  const { name } = props;

  return (
    <FormFieldProvider name={name}>
      <Controller {...props} />
    </FormFieldProvider>
  );
};
