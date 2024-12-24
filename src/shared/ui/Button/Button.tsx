import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ForwardRefRenderFunction } from "react";
import * as React from "react";
import { forwardRef } from "react";

import { cn } from "../../lib/ui/cn";
import { SpinnerIcon } from "../icons/SpinnerIcon";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
  };

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const ButtonComponent: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  props,
  ref
) => {
  const {
    className,
    variant,
    size,
    asChild = false,
    loading = false,
    disabled,
    children,
    ...restProps
  } = props;
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      disabled={loading || disabled}
      {...restProps}
    >
      {children}
      {loading ? <SpinnerIcon className="ml-2 size-4 animate-spin" /> : null}
    </Comp>
  );
};

export const Button = forwardRef(ButtonComponent);
