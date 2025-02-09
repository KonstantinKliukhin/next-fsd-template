"use client";
import type { ComponentProps, FC } from "react";
import { useId } from "react";

import { FormItemProvider } from "./providers/FormItemProvider";
import { cn } from "../../lib/ui/cn";

type FormItemProps = ComponentProps<"div">;

export const FormItem: FC<FormItemProps> = (props) => {
  const { className, ...restProps } = props;
  const id = useId();

  return (
    <FormItemProvider id={id}>
      <div className={cn("space-y-2", className)} {...restProps} />
    </FormItemProvider>
  );
};
