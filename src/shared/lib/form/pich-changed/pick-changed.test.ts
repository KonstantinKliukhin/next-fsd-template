import { pickChanged } from "./pick-changed";

describe("pickChanged", () => {
  it("should return an empty object when data is empty", () => {
    const dirtyFields = {};
    const data = {};
    const result = pickChanged(dirtyFields, data);
    expect(result).toEqual({});
  });

  it("should preserve the data types of the original fields in the returned object", () => {
    const dirtyFields = {
      name: true,
      age: true,
      isActive: true,
      scores: true,
    };
    const data = {
      name: "John",
      age: 30,
      isActive: true,
      scores: [85, 90, 95],
    };

    const result = pickChanged(dirtyFields, data);

    expect(typeof result.name).toBe("string");
    expect(typeof result.age).toBe("number");
    expect(typeof result.isActive).toBe("boolean");
    expect(Array.isArray(result.scores)).toBe(true);
    expect(result).toEqual(data);
  });

  it("should return an empty object when dirtyFields is empty", () => {
    const dirtyFields = {};
    const data = { name: "John", age: 30 };

    const result = pickChanged(dirtyFields, data);

    expect(result).toEqual({});
  });

  it("should handle arrays in dirtyFields and data correctly", () => {
    const dirtyFields = {
      items: [true, false, true],
    };
    const data = {
      items: ["apple", "banana", "cherry"],
    };

    const result = pickChanged(dirtyFields, data);

    expect(result).toEqual({
      items: ["apple", "banana", "cherry"],
    });
  });

  it("should ignore fields that are not marked as dirty", () => {
    const dirtyFields = { name: true, age: false };
    const data = { name: "John", age: 30, email: "john@example.com" };

    const result = pickChanged(dirtyFields, data);

    expect(result).toEqual({ name: "John" });
  });

  it("should correctly pick changed fields when all fields are marked as dirty", () => {
    const dirtyFields = { name: true, age: true, email: true };
    const data = { name: "John", age: 30, email: "john@example.com" };

    const result = pickChanged(dirtyFields, data);

    expect(result).toEqual(data);
  });
});
