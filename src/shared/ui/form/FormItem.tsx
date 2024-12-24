"use client";
import type { ForwardedRef, ForwardRefRenderFunction, HTMLAttributes } from "react";
import { forwardRef, useId } from "react";

import { FormItemProvider } from "./providers/FormItemProvider";
import { cn } from "../../lib/ui/cn";

type FormItemProps = HTMLAttributes<HTMLDivElement>;

const FormItemComponent: ForwardRefRenderFunction<HTMLDivElement, FormItemProps> = (
  props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const { className, ...restProps } = props;
  const id = useId();

  return (
    <FormItemProvider id={id}>
      <div ref={ref} className={cn("space-y-2", className)} {...restProps} />
    </FormItemProvider>
  );
};

export const FormItem = forwardRef(FormItemComponent);
