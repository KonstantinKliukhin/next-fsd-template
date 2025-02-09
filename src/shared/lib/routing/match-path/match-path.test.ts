import { matchPath } from "./match-path";

describe("matchPath", () => {
  it("if static routes matches should return true", () => {
    const match = matchPath("/home", "/home");

    expect(match).toBe(true);
  });

  it("if static routes NOT matches should return false", () => {
    const match = matchPath("/home", "/feed");

    expect(match).toBe(false);
  });

  it("if static routes NOT matches should return false", () => {
    const match = matchPath("/home", "/feed");

    expect(match).toBe(false);
  });

  it("if caseSensitive param is false and static routes are same but have different case should return true", () => {
    const match = matchPath("/HOME", "/home", { caseSensitive: false });

    expect(match).toBe(true);
  });

  it("if caseSensitive param is true and static routes are same but have different case should return false", () => {
    const match = matchPath("/HOME", "/home", { caseSensitive: true });

    expect(match).toBe(false);
  });

  it("Should return true for matching with dynamic routes", () => {
    const match = matchPath(
      "/article/:id/comments/:id",
      "/article/123/comments/321"
    );

    expect(match).toBe(true);
  });

  it("Should return false when dynamic route has additional sections", () => {
    const match = matchPath("/article/:id", "/article/123/comments/321");

    expect(match).toBe(false);
  });

  it("Should return false when dynamic route have less sections than pattern", () => {
    const match = matchPath("/article/:id/comments/:id", "/article/123");

    expect(match).toBe(false);
  });
});
