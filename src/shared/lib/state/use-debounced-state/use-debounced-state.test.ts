import { renderHook, act } from "@testing-library/react";

import { useDebouncedState } from "./use-debounced-state";

describe("useDebouncedState", () => {
  it("should initialize with the provided initial value", () => {
    const initialValue = "test";
    const { result } = renderHook(() => useDebouncedState(initialValue));

    expect(result.current[0]).toBe(initialValue);
    expect(result.current[1]).toBe(initialValue);
  });

  it("should update the value immediately when setValue is called", () => {
    const initialValue = "initial";
    const { result } = renderHook(() => useDebouncedState(initialValue));

    act(() => {
      result.current[2]("updated");
    });

    expect(result.current[0]).toBe("updated");
    expect(result.current[1]).toBe("initial");
  });

  it("should update the debouncedValue after the specified delay", async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useDebouncedState("initial", 500));

    act(() => {
      result.current[2]("updated");
    });

    expect(result.current[0]).toBe("updated");
    expect(result.current[1]).toBe("initial");

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current[0]).toBe("updated");
    expect(result.current[1]).toBe("updated");

    jest.useRealTimers();
  });

  it("should use the default delay of 300ms when no delay is provided", () => {
    jest.useFakeTimers();
    const initialValue = "test";
    const { result } = renderHook(() => useDebouncedState(initialValue));

    act(() => {
      result.current[2]("new value");
    });

    expect(result.current[0]).toBe("new value");
    expect(result.current[1]).toBe(initialValue);

    act(() => {
      jest.advanceTimersByTime(299);
    });

    expect(result.current[1]).toBe(initialValue);

    act(() => {
      jest.advanceTimersByTime(1);
    });

    expect(result.current[1]).toBe("new value");

    jest.useRealTimers();
  });

  it("should update both value and debouncedValue when initialValue changes", () => {
    const initialValue = "test";
    const { result, rerender } = renderHook(({ value }) => useDebouncedState(value), {
      initialProps: { value: initialValue },
    });

    expect(result.current[0]).toBe(initialValue);
    expect(result.current[1]).toBe(initialValue);

    const newValue = "updated";
    rerender({ value: newValue });

    expect(result.current[0]).toBe(newValue);
    expect(result.current[1]).toBe(newValue);
  });

  it("should clear the timeout when the component unmounts", () => {
    jest.useFakeTimers();
    const clearTimeoutSpy = jest.spyOn(global, "clearTimeout");
    const { unmount } = renderHook(() => useDebouncedState("initial", 500));

    act(() => {
      unmount();
    });

    expect(clearTimeoutSpy).toHaveBeenCalled();
    clearTimeoutSpy.mockRestore();
    jest.useRealTimers();
  });
});
