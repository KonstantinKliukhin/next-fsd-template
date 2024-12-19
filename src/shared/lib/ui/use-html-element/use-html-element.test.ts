import { renderHook } from "@testing-library/react";

import { useHtmlElement } from "./use-html-element";

describe("useHtmlElement", () => {
  it("should return null when no element matches the selector", () => {
    const { result } = renderHook(() => useHtmlElement<HTMLDivElement>("#non-existent"));
    expect(result.current).toBeNull();
  });
});

it("should return the correct HTMLElement when a matching element exists", () => {
  document.body.innerHTML = '<div id="test-div"></div>';

  const { result } = renderHook(() => useHtmlElement<HTMLDivElement>("#test-div"));

  expect(result.current).toBeInstanceOf(HTMLDivElement);
  expect(result.current?.id).toBe("test-div");
});

it("should update the returned element when the selector changes", () => {
  document.body.innerHTML = '<div id="test-div-1"></div><div id="test-div-2"></div>';
  const { result, rerender } = renderHook(
    ({ selector }) => useHtmlElement<HTMLDivElement>(selector),
    { initialProps: { selector: "#test-div-1" } }
  );

  expect(result.current).toBeInstanceOf(HTMLDivElement);
  expect(result.current?.id).toBe("test-div-1");

  rerender({ selector: "#test-div-2" });

  expect(result.current).toBeInstanceOf(HTMLDivElement);
  expect(result.current?.id).toBe("test-div-2");
});
