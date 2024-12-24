"use client";
import type { ForwardRefRenderFunction, HTMLAttributes } from "react";
import { forwardRef } from "react";
import { useFormContext } from "react-hook-form";

import { cn } from "../../lib/ui/cn";

type GeneralFormMessageProps = HTMLAttributes<HTMLParagraphElement>;

const GeneralFormMessageComponent: ForwardRefRenderFunction<
  HTMLParagraphElement,
  GeneralFormMessageProps
> = (props, ref) => {
  const context = useFormContext();

  return (
    <p
      ref={ref}
      className={cn("text-[0.8rem] font-medium text-destructive", props.className)}
      {...props}
    >
      {context.formState.errors.root?.message}
    </p>
  );
};

export const GeneralFormMessage = forwardRef(GeneralFormMessageComponent);
