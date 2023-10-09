import { describe, it, expect } from "vitest";
import patienceSort from "../sort";

describe("sort", () => {
  it("sorts well", () => {
    expect(patienceSort([1, 4, 5, 3, 2])).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it("handles empty array", () => {
    expect(patienceSort([])).toStrictEqual([]);
  });

  it("handles null", () => {
    expect(patienceSort(null)).toBe(null);
  });
});
