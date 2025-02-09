"use client";
import type { ComponentProps, FC } from "react";

import { useFormField } from "./use-form-field";
import { cn } from "../../lib/ui/cn";

type FormDescriptionProps = ComponentProps<"p">;

export const FormDescription: FC<FormDescriptionProps> = (props) => {
  const { className, ...restProps } = props;

  const { formDescriptionId } = useFormField();

  return (
    <p
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...restProps}
    />
  );
};
