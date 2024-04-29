import { FieldNamesMarkedBoolean, FieldValues } from "react-hook-form";

export function pickTouched<T extends FieldValues>(
  touched: Partial<Readonly<FieldNamesMarkedBoolean<FieldValues>>>,
  data: T
): Partial<T> {
  return Object.entries(touched).reduce((acc, [key, isTouched]) => {
    if (!isTouched) return acc;
    return {
      ...acc,
      [key]: data[key],
    };
  }, {});
}
