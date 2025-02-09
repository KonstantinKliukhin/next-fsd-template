"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import type { ComponentProps, FC } from "react";
import * as React from "react";

import { cn } from "../../lib/ui/cn";

type LabelProps = ComponentProps<typeof LabelPrimitive.Root>;

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

export const Label: FC<LabelProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <LabelPrimitive.Root className={cn(labelVariants(), className)} {...restProps} />
  );
};
