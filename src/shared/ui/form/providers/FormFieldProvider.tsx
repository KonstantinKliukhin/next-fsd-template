import type { FC, PropsWithChildren } from "react";
import * as React from "react";

import { FormFieldContext } from "../contexts/form-field-context";

type FormFieldProviderProps = PropsWithChildren & {
  name: string;
};

export const FormFieldProvider: FC<FormFieldProviderProps> = (props) => {
  const { children, name } = props;

  return (
    <FormFieldContext.Provider value={{ name }}>{children}</FormFieldContext.Provider>
  );
};
