const addStrings = require("../utils/addStrings");

const resultInvalidString = "Input must be valid strings representing numbers.";
const resultExceedLimit =
  "Result exceeds the maximum finite value representable in JavaScript. Consider convert number to bigger units.";
describe("addStrings function", () => {
  test("Adds two valid strings as floats and returns the sum", () => {
    expect(addStrings("2.5", "3.5")).toBe("6");
    expect(addStrings("10.75", "5.25")).toBe("16");
  });

  test("Handles strings representing negative floats", () => {
    expect(addStrings("-2.5", "3.5")).toBe("1");
    expect(addStrings("10.75", "-5.25")).toBe("5.5");
  });

  test("Handles invalid strings and returns an error message", () => {
    expect(addStrings("abc", "3.5")).toBe(resultInvalidString);
    expect(addStrings("10.75", "xyz")).toBe(resultInvalidString);
    expect(addStrings("", "3.5")).toBe(resultInvalidString);
  });

  test("Handles non-string inputs and returns an error message", () => {
    expect(addStrings(2, "3.5")).toBe(resultInvalidString);
    expect(addStrings("10.75", true)).toBe(resultInvalidString);
    expect(addStrings(null, "5.5")).toBe(resultInvalidString);
  });

  test("Handles result exceeding maximum finite value", () => {
    const num1 = "1e308";
    const num2 = "1e308";

    const result = addStrings(num1, num2);

    expect(result).toBe(resultExceedLimit);
  });

  test("Handles positive and negative infinity", () => {
    expect(addStrings("Infinity", "3.5")).toBe(resultExceedLimit);
    expect(addStrings("-Infinity", "3.5")).toBe(resultExceedLimit);
    expect(addStrings("Infinity", "-Infinity")).toBe(resultExceedLimit);
  });
});
