import type { FC, PropsWithChildren } from "react";
import * as React from "react";

import { FormItemContext } from "../contexts/form-item-context";

type FormItemProviderProps = PropsWithChildren & {
  id: string;
};

export const FormItemProvider: FC<FormItemProviderProps> = (props) => {
  const { children, id } = props;

  return <FormItemContext.Provider value={{ id }}>{children}</FormItemContext.Provider>;
};
