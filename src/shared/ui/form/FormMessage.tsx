"use client";
import type { ComponentProps, FC } from "react";

import { useFormField } from "./use-form-field";
import { cn } from "../../lib/ui/cn";

type FormMessageProps = ComponentProps<"p">;

export const FormMessage: FC<FormMessageProps> = (props) => {
  const { className, children, ...restProps } = props;
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      id={formMessageId}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...restProps}
    >
      {body}
    </p>
  );
};
