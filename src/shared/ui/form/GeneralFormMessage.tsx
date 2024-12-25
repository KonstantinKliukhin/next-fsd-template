"use client";
import type { ComponentProps, FC } from "react";
import { useFormContext } from "react-hook-form";

import { cn } from "../../lib/ui/cn";

type GeneralFormMessageProps = ComponentProps<"p">;

export const GeneralFormMessage: FC<GeneralFormMessageProps> = (props) => {
  const { className, ...restProps } = props;
  const context = useFormContext();

  return (
    <p
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...restProps}
    >
      {context.formState.errors.root?.message}
    </p>
  );
};
