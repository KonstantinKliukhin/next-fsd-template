"use client";
import type * as LabelPrimitive from "@radix-ui/react-label";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  ForwardRefRenderFunction,
} from "react";
import { forwardRef } from "react";

import { useFormField } from "./use-form-field";
import { cn } from "../../lib/ui/cn";
import { Label } from "../Label";

type FormLabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

const FormLabelComponent: ForwardRefRenderFunction<
  ElementRef<typeof LabelPrimitive.Root>,
  FormLabelProps
> = (props, ref) => {
  const { className, ...restProps } = props;
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...restProps}
    />
  );
};

export const FormLabel = forwardRef(FormLabelComponent);
