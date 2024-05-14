import { validateNonEmpty } from "../validateNonEmpty";
import { describe, test, expect } from "vitest";

describe("validateNonEmpty function", () => {
  test("if value is not empty return true", () => {

    const value = "I'm Nil";
    const result = validateNonEmpty(value);

    expect(result).toBe(true);
  });

  test("if value is empty return true", () => {
    const value = "";
    const result = validateNonEmpty(value);

    expect(result).toBe(false);
  });
});