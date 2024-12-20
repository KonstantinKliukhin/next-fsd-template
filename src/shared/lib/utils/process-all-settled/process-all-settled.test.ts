import { processAllSettled } from "./process-all-settled";

describe("processSingleSettled", () => {
  it("should return null for single rejected promise", async () => {
    const promises = await Promise.allSettled([Promise.reject(1)]);

    const [result] = processAllSettled(promises);

    expect(result).toBeNull();
  });

  it("should return null for each rejected promise", async () => {
    const promises = await Promise.allSettled([
      Promise.reject(1),
      Promise.reject(2),
      Promise.reject(3),
    ]);

    const [result1, result2, result3] = processAllSettled(promises);

    expect(result1).toBeNull();
    expect(result2).toBeNull();
    expect(result3).toBeNull();
  });

  it("should return value for single fulfilled promise", async () => {
    const promises = await Promise.allSettled([Promise.resolve(1)]);

    const [result] = processAllSettled(promises);

    expect(result).toEqual(1);
  });

  it("should return value for multiple fulfilled promises in same order", async () => {
    const promises = await Promise.allSettled([
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ]);

    const [result1, result2, result3] = processAllSettled(promises);

    expect(result1).toEqual(1);
    expect(result2).toEqual(2);
    expect(result3).toEqual(3);
  });

  it("should return null or value depending on promise final status and do it in correct order", async () => {
    const promises = await Promise.allSettled([
      Promise.resolve(1),
      Promise.reject(2),
      Promise.resolve(3),
      Promise.reject(4),
    ]);

    const [result1, result2, result3, result4] = processAllSettled(promises);

    expect(result1).toEqual(1);
    expect(result2).toBeNull();
    expect(result3).toEqual(3);
    expect(result4).toBeNull();
  });
});
