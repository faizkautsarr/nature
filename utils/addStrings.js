function addStrings(num1, num2) {
  if (typeof num1 === "string" && typeof num2 === "string") {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
      const result = parsedNum1 + parsedNum2;

      if (result <= Number.MAX_VALUE && result >= -Number.MAX_VALUE) {
        return result.toString();
      } else {
        return "Result exceeds the maximum finite value representable in JavaScript. Consider convert number to bigger units.";
      }
    } else {
      return "Input must be valid strings representing numbers.";
    }
  } else {
    return "Input must be valid strings representing numbers.";
  }
}

module.exports = addStrings;
