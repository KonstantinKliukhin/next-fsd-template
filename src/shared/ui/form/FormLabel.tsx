"use client";
import type * as LabelPrimitive from "@radix-ui/react-label";
import type { ComponentProps, FC } from "react";

import { useFormField } from "./use-form-field";
import { cn } from "../../lib/ui/cn";
import { Label } from "../Label";

type FormLabelProps = ComponentProps<typeof LabelPrimitive.Root>;

export const FormLabel: FC<FormLabelProps> = (props) => {
  const { className, ...restProps } = props;
  const { error, formItemId } = useFormField();

  return (
    <Label
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...restProps}
    />
  );
};
