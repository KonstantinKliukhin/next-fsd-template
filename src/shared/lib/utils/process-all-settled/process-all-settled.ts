export function processAllSettled<T extends readonly unknown[]>(results: {
  [K in keyof T]: PromiseSettledResult<T[K]>;
}): { [K in keyof T]: T[K] | null };

export function processAllSettled(results: PromiseSettledResult<any>[]): any[] {
  return results.map((result) => processSingleSettled(result));
}

function processSingleSettled<T>(result: PromiseSettledResult<T>): T | null {
  if (result.status === "fulfilled") {
    return result.value;
  }

  return null;
}
