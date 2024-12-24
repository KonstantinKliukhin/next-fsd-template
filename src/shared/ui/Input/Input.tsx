import type { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { memo } from "react";

import { cn } from "../../lib/ui/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref
) => {
  const { className, type, ...restProps } = props;

  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...restProps}
    />
  );
};

export const Input = memo(InputComponent);
