import { validateType } from "../validateType";
import { describe, test, expect } from "vitest";

describe("validateType function", () => {
  test("if is correct type return true", () => {

    const value = 123;
    const type = "number";
    const result = validateType(value, type);

    expect(result).toBe(true);
  });

  test("if is incorrect type return false", () => {

    const value = "simple string";
    const type = "number";
    const result = validateType(value, type);

    expect(result).toBe(false);
  });
});