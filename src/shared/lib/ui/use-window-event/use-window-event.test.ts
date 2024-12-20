import { renderHook } from "@testing-library/react";

import { useWindowEvent } from "./use-window-event";

describe("useWindowEvent", () => {
  it("should add event listener for the specified event type when component mounts", () => {
    const mockCallback = jest.fn();
    const eventType = "click";

    const addEventListenerSpy = jest.spyOn(window, "addEventListener");
    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useWindowEvent(eventType, mockCallback));

    expect(addEventListenerSpy).toHaveBeenCalledWith(eventType, expect.any(Function));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(eventType, expect.any(Function));

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });

  it("should remove event listener for the specified event type when component unmounts", () => {
    const mockCallback = jest.fn();
    const eventType = "resize";

    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useWindowEvent(eventType, mockCallback));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(eventType, expect.any(Function));

    removeEventListenerSpy.mockRestore();
  });

  it("should call the callback function with the event object when the specified event occurs", () => {
    const mockCallback = jest.fn();
    const eventType = "click";
    const mockEvent = new Event(eventType);

    renderHook(() => useWindowEvent(eventType, mockCallback));

    window.dispatchEvent(mockEvent);

    expect(mockCallback).toHaveBeenCalledWith(mockEvent);
  });

  it("should use the latest callback function even if it changes after initial render", () => {
    const initialCallback = jest.fn();
    const updatedCallback = jest.fn();
    const eventType = "click";
    const mockEvent = new Event(eventType);

    const { rerender } = renderHook(
      ({ callback }) => useWindowEvent(eventType, callback),
      { initialProps: { callback: initialCallback } }
    );

    window.dispatchEvent(mockEvent);
    expect(initialCallback).toHaveBeenCalledWith(mockEvent);
    expect(updatedCallback).not.toHaveBeenCalled();

    rerender({ callback: updatedCallback });

    window.dispatchEvent(mockEvent);
    expect(initialCallback).toHaveBeenCalledTimes(1);
    expect(updatedCallback).toHaveBeenCalledWith(mockEvent);
  });

  it("should handle multiple event types correctly when used in multiple instances", () => {
    const clickCallback = jest.fn();
    const resizeCallback = jest.fn();
    const clickEvent = new Event("click");
    const resizeEvent = new Event("resize");

    const { unmount } = renderHook(() => {
      useWindowEvent("click", clickCallback);
      useWindowEvent("resize", resizeCallback);
    });

    window.dispatchEvent(clickEvent);
    expect(clickCallback).toHaveBeenCalledWith(clickEvent);
    expect(resizeCallback).not.toHaveBeenCalled();

    window.dispatchEvent(resizeEvent);
    expect(clickCallback).toHaveBeenCalledTimes(1);
    expect(resizeCallback).toHaveBeenCalledWith(resizeEvent);

    unmount();

    window.dispatchEvent(clickEvent);
    window.dispatchEvent(resizeEvent);
    expect(clickCallback).toHaveBeenCalledTimes(1);
    expect(resizeCallback).toHaveBeenCalledTimes(1);
  });
});
