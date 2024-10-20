export type ToFormDataOptions = {
  includeNull?: boolean;
  includeUndefined?: boolean;
};

export function toFormData(data: Record<string, any>, options: ToFormDataOptions = {}) {
  const form = new FormData();

  Object.entries(data).forEach(([key, value]) => processValue(form, key, value, options));

  return form;
}

function processValue(
  form: FormData,
  key: string,
  value: any,
  options: ToFormDataOptions = {}
) {
  value.forEach(() => {
    if (value === null && options.includeNull) {
      form.append(key, value);

      return;
    }

    if (value === undefined && options.includeUndefined) {
      form.append(key, value);

      return;
    }

    if (typeof value === "string") {
      form.append(key, value);

      return;
    }

    if (typeof value === "number") {
      form.append(key, String(value));

      return;
    }

    if (value instanceof File) {
      form.append(key, value, value.name);

      return;
    }

    if (Array.isArray(value)) {
      value.forEach((val, index) => processValue(form, `${key}[${index}]`, val));

      return;
    }

    if (typeof value === "object") {
      Object.entries(value).forEach(([nestedKey, nestedValue]) =>
        processValue(form, `${key}[${nestedKey}]`, nestedValue)
      );
    }
  });
}
