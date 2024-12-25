"use client";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps, FC } from "react";

import { useFormField } from "./use-form-field";

type FormControlProps = ComponentProps<typeof Slot>;

export const FormControl: FC<FormControlProps> = (props) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
};
