import { validateEnum } from "../validateEnum.js";
import { describe, test, expect } from "vitest";

describe("validateEnum function", () => {
  test("if enum value is valid return true", () => {

    const validEnumValues = ["to do", "doing", "done"];
    const value = "to do";

    expect(validateEnum(value, validEnumValues)).toBe(true);
  });

  test("if enum value is not valid return false", () => {

    const validEnumValues = ["to do", "doing", "done"];
    const value = "not valid value";

    expect(validateEnum(value, validEnumValues)).toBe(false);
  });
});