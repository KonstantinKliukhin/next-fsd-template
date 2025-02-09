import { renderHook, act } from "@testing-library/react";

import { useCustomForm } from "./use-custom-form";

describe("useCustomForm", () => {
  it("should reset the form with default values when they are provided as an object", () => {
    const defaultValues = { name: "John", age: 30 };
    const { result } = renderHook(() => useCustomForm({ defaultValues }));

    expect(result.current.getValues()).toEqual(defaultValues);

    act(() => {
      result.current.setValue("name", "Jane");
      result.current.setValue("age", 25);
    });

    expect(result.current.getValues()).toEqual({ name: "Jane", age: 25 });

    act(() => {
      result.current.reset();
    });

    expect(result.current.getValues()).toEqual(defaultValues);
  });

  it("should handle empty object as default values", () => {
    const defaultValues = {};
    const { result } = renderHook(() =>
      useCustomForm<{ name: string; age: number }>({ defaultValues })
    );

    expect(result.current.getValues()).toEqual({});

    act(() => {
      result.current.setValue("name", "Jane");
      result.current.setValue("age", 25);
    });

    expect(result.current.getValues()).toEqual({ name: "Jane", age: 25 });

    act(() => {
      result.current.reset();
    });

    expect(result.current.getValues()).toEqual({});
  });

  it("should preserve form state when default values haven't changed", () => {
    const initialDefaultValues = { name: "John", age: 30 };
    const { result, rerender } = renderHook(
      ({ defaultValues }) => useCustomForm({ defaultValues }),
      {
        initialProps: { defaultValues: initialDefaultValues },
      }
    );

    expect(result.current.getValues()).toEqual(initialDefaultValues);

    act(() => {
      result.current.setValue("name", "Jane");
      result.current.setValue("age", 25);
    });

    expect(result.current.getValues()).toEqual({ name: "Jane", age: 25 });

    rerender({ defaultValues: initialDefaultValues });

    expect(result.current.getValues()).toEqual({ name: "Jane", age: 25 });
  });

  it("should handle nested object structures in default values", () => {
    const nestedDefaultValues = {
      user: {
        name: "John",
        address: {
          city: "New York",
          zip: "10001",
        },
      },
      preferences: {
        theme: "dark",
        notifications: {
          email: true,
          push: false,
        },
      },
    };
    const { result } = renderHook(() =>
      useCustomForm({ defaultValues: nestedDefaultValues })
    );

    expect(result.current.getValues()).toEqual(nestedDefaultValues);

    act(() => {
      result.current.setValue("user.name", "Jane");
      result.current.setValue("user.address.city", "Los Angeles");
      result.current.setValue("preferences.notifications.push", true);
    });

    expect(result.current.getValues()).toEqual({
      user: {
        name: "Jane",
        address: {
          city: "Los Angeles",
          zip: "10001",
        },
      },
      preferences: {
        theme: "dark",
        notifications: {
          email: true,
          push: true,
        },
      },
    });

    act(() => {
      result.current.reset();
    });

    expect(result.current.getValues()).toEqual(nestedDefaultValues);
  });

  it("should handle undefined as default values", () => {
    const defaultValues = undefined;
    const { result } = renderHook(() => useCustomForm({ defaultValues }));

    expect(result.current.getValues()).toEqual({});

    act(() => {
      result.current.setValue("name", "Jane");
      result.current.setValue("age", 25);
    });

    expect(result.current.getValues()).toEqual({ name: "Jane", age: 25 });

    act(() => {
      result.current.reset();
    });

    expect(result.current.getValues()).toEqual({});
  });

  it("should reset the form multiple times if default values change", () => {
    const initialDefaultValues = { name: "John", age: 30 };
    const { result, rerender } = renderHook(
      ({ defaultValues }) => useCustomForm({ defaultValues }),
      {
        initialProps: { defaultValues: initialDefaultValues },
      }
    );

    expect(result.current.getValues()).toEqual(initialDefaultValues);

    act(() => {
      result.current.setValue("name", "Jane");
      result.current.setValue("age", 25);
    });

    expect(result.current.getValues()).toEqual({ name: "Jane", age: 25 });

    const newDefaultValues = { name: "Alice", age: 35 };
    rerender({ defaultValues: newDefaultValues });

    expect(result.current.getValues()).toEqual(newDefaultValues);

    act(() => {
      result.current.setValue("name", "Bob");
    });

    expect(result.current.getValues()).toEqual({ name: "Bob", age: 35 });

    const finalDefaultValues = { name: "Charlie", age: 40, city: "New York" };
    rerender({ defaultValues: finalDefaultValues });

    expect(result.current.getValues()).toEqual(finalDefaultValues);
  });
});
