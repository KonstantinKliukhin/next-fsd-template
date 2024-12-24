"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  ForwardRefRenderFunction,
} from "react";
import * as React from "react";
import { forwardRef } from "react";

import { cn } from "../../lib/ui/cn";

type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const LabelComponent: ForwardRefRenderFunction<
  ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
> = (props, ref) => {
  const { className, ...restProps } = props;

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...restProps}
    />
  );
};

export const Label = forwardRef(LabelComponent);
