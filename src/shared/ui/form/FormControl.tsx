"use client";
import { Slot } from "@radix-ui/react-slot";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  ForwardRefRenderFunction,
} from "react";
import { forwardRef } from "react";

import { useFormField } from "./use-form-field";

type FormControlProps = ComponentPropsWithoutRef<typeof Slot>;

const FormControlComponent: ForwardRefRenderFunction<
  ElementRef<typeof Slot>,
  FormControlProps
> = (props, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
};

export const FormControl = forwardRef(FormControlComponent);
