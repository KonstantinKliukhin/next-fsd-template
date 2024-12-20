import { afterEach } from "@jest/globals";
import { act, renderHook } from "@testing-library/react";

import type { BreakpointKey } from "./use-media-query";
import { useMediaQuery } from "./use-media-query";
import { getIsClient } from "../../utils/get-is-client";

const getIsClientModule = { getIsClient };

describe("useMediaQuery", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should clean up event listeners on component unmount", () => {
    const key = "min-768" as BreakpointKey;
    const matchMediaMock = jest.spyOn(window, "matchMedia");
    const removeEventListenerMock = jest.fn();

    const mediaQueryListMock: Partial<MediaQueryList> = {
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: removeEventListenerMock,
    };

    matchMediaMock.mockReturnValue(mediaQueryListMock as MediaQueryList);

    const { unmount } = renderHook(() => useMediaQuery(key));

    unmount();

    expect(removeEventListenerMock).toHaveBeenCalledTimes(1);
    expect(removeEventListenerMock).toHaveBeenCalledWith("change", expect.any(Function));

    matchMediaMock.mockRestore();
  });

  it("should update matches state when media query changes", () => {
    const key = "min-768" as BreakpointKey;
    const matchMediaMock = jest.spyOn(window, "matchMedia");
    let mediaQueryListMock = {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
    matchMediaMock.mockReturnValue(mediaQueryListMock as unknown as MediaQueryList);

    const { result } = renderHook(() => useMediaQuery(key));
    expect(result.current).toBe(false);

    act(() => {
      mediaQueryListMock.matches = true;
      mediaQueryListMock.addListener?.mock.calls[0][0]();
    });

    expect(result.current).toBe(true);

    matchMediaMock.mockRestore();
  });

  it("should handle different direction-size combinations in breakpoint key", () => {
    const { result } = renderHook(() => useMediaQuery("min-768"));

    expect(result.current).toBe(false);

    const matchMediaMock = jest.spyOn(window, "matchMedia");
    matchMediaMock.mockReturnValue({
      matches: true,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    } as unknown as MediaQueryList);

    const { result: maxResult } = renderHook(() => useMediaQuery("max-1024"));

    expect(maxResult.current).toBe(true);

    matchMediaMock.mockRestore();
  });

  it("should correctly parse breakpoint key and generate media query", () => {
    const key = "min-768";
    renderHook(() => useMediaQuery(key));

    expect(window.matchMedia).toHaveBeenCalledWith("(min-width: 768px)");
  });

  it("should return default value when not in client-side environment", () => {
    jest.spyOn(getIsClientModule, "getIsClient").mockReturnValue(false);

    const { result } = renderHook(() => useMediaQuery("min-768"));

    expect(result.current).toBe(false);

    jest.spyOn(getIsClientModule, "getIsClient").mockRestore();
  });
});
