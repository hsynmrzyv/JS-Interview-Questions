// 1. Write a function that takes two numbers and returns the sum of those numbers

const add = (a, b) => {
  if (typeof a !== "number" && typeof b !== "number") return;
  return a + b;
};

console.log("add", add(5, 10)); // Expects: 15

////////////////////////////////////////////////////////////////

// 2. Write a function that takes any number as arguments and returns the sum of all arguments

const sum = (...numbers) => {
  const result = numbers.reduce((sum, num) => sum + num, 0);
  return result;
};

console.log("sum", sum(5, 10, 15, 20)); // Expects 50
