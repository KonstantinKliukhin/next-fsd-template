"use client";
import type { ForwardRefRenderFunction, HTMLAttributes } from "react";
import { forwardRef } from "react";

import { useFormField } from "./use-form-field";
import { cn } from "../../lib/ui/cn";

type FormDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

const FormDescriptionComponent: ForwardRefRenderFunction<
  HTMLParagraphElement,
  FormDescriptionProps
> = (props, ref) => {
  const { className, ...restProps } = props;

  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...restProps}
    />
  );
};

export const FormDescription = forwardRef(FormDescriptionComponent);
