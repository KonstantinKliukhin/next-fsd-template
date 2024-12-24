"use client";
import type { ForwardRefRenderFunction, HTMLAttributes } from "react";
import { forwardRef } from "react";

import { useFormField } from "./use-form-field";
import { cn } from "../../lib/ui/cn";

type FormMessageProps = HTMLAttributes<HTMLParagraphElement>;

const FormMessageComponent: ForwardRefRenderFunction<
  HTMLParagraphElement,
  FormMessageProps
> = (props, ref) => {
  const { className, children, ...restProps } = props;
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...restProps}
    >
      {body}
    </p>
  );
};

export const FormMessage = forwardRef(FormMessageComponent);
