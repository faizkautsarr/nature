const addStrings = require("./utils/addStrings");

// Example 1
const result1 = addStrings("2.5", "3.5");
console.log(result1); // Output: "6"

// Example 2
const result2 = addStrings("-2.5", "3.5");
console.log(result2); // Output: "1"

// Example 3
const result3 = addStrings("9007199254740991", "1");
console.log(result3); // Output: "9007199254740992"

// Example 4
const result4 = addStrings("abc", "3.5");
console.log(result4); // Output: "Input must be valid strings representing numbers."

// Example 5
const result5 = addStrings(2, "3.5");
console.log(result5); // Output: "Input must be valid strings representing numbers."

// Example 6
const result6 = addStrings("", "3.5");
console.log(result6); // Output: "Input must be valid strings representing numbers."

// Example 7
const result7 = addStrings("Infinity", "3.5");
console.log(result7); // Output: "Result exceeds the maximum finite value representable in JavaScript."

// Example 8
const result8 = addStrings("-Infinity", "3.5");
console.log(result8); // Output: "Result exceeds the maximum finite value representable in JavaScript."

// Example 9
const result9 = addStrings("10.75", "-5.25");
console.log(result9); // Output: "5.5"

// Example 10
const result10 = addStrings("1e308", "1e308");
console.log(result10); // Output: "Result exceeds the maximum finite value representable in JavaScript."
