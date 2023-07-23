// 1. What is the difference between == and === operators?

// == (Loose Equality Operator):
// The double equals == is known as the "loose equality operator." It compares two values for equality after performing type coercion if the types of the operands are different. Type coercion means that the values are converted to a common type before comparison. For example:

5 == "5"; // true (because '5' is converted to a number) // 5 == Number("5")
0 == false; // true (because false is converted to 0) // 0 == Number("false")
null == undefined; // true (both null and undefined are considered equal) // null == Boolean(undefine)

// === (Strict Equality Operator):
// The triple equals === is known as the "strict equality operator." It compares two values for equality without performing any type coercion. The values must have the same type and the same value to be considered equal. For example:

5 === "5"; // false (because the types are different, number !== string)
0 === false; // false (because the types are different, number !== boolean)
null === undefined; // false (because the types are different, null !== undefined)

////////////////////////////////////////////////////////////////////////////////////////////////

// 2. What is the purpose of double exclamation (!!)?

// In JavaScript, the double exclamation mark !! is a shorthand way to convert a value into its corresponding boolean representation. It's a common technique used to explicitly convert any value to a boolean true or false.

!!true; // true
!!1; // true
!!"hello"; // true
!![1, 2, 3]; // true
!!{}; // true

!!false; // false
!!0; // false
!!null; // false
!!undefined; // false
!!""; // false

////////////////////////////////////////////////////////////////////////////////////////////////

// 3. What is typeof operator?

// In JavaScript, the typeof operator is a unary operator that allows you to determine the data type of a given value or expression. It returns a string that represents the data type of the operand.

// The syntax of the typeof operator is as follows:

typeof operand;

// Here, operand can be any value or expression that you want to check the data type of.

typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof []; // "object"
typeof null; // "object" (Note: This is considered a historical mistake in JavaScript)
typeof undefined; // "undefined"
typeof Symbol("mySymbol"); // "symbol"
typeof function () {}; // "function"
typeof BigInt(123); // "bigint"

////////////////////////////////////////////////////////////////////////////////////////////////

// 4. What is the difference between null and undefined?

// In JavaScript, null and undefined are two distinct primitive data types that represent the absence of a meaningful value. While they may seem similar at first, they have some fundamental differences:

// 4.1 null is an assignment value which indicates that variable points to no object. undefined is not an assignment value where a variable has been declared but has not yet been assigned a value.

// 4.2 Type of null is object. Type of undefined is undefined

// 4.3 The null value is a primitive value that represents the null, empty, or non- existent reference. The undefined value is a primitive value used when a variable has not been assigned a value.

// 4.4 null indicates the absence of a value for a variable. undefined indicates absence of variable itself

// 4.5 null converted to zero (0) while performing primitive operations. undefined converted to NaN while performing primitive operations

////////////////////////////////////////////////////////////////////////////////////////////////

// 5. What is NaN property

// NaN stands for "Not-a-Number," and it is a special value representing the result of an invalid or undefined mathematical operation. When an arithmetic operation or a function involving arithmetic calculations fails to produce a meaningful numeric result, JavaScript returns NaN to indicate that the result is not a valid number.

"hello" * 3; // NaN
10 + NaN; // NaN
NaN * 5; // NaN
parseInt("hello"); // NaN

////////////////////////////////////////////////////////////////////////////////////////////////

// 6. What is isNaN?

// The isNaN() function is used to determine whether a value is an illegal number (Not-a-Number)
// or not. i.e, This function returns true if the value equates to NaN. Otherwise it returns false.

// isNaN('Hello') //true
// isNaN('100') //false

// 7. How do you add a key value pair in javascript?

const myObject = {};

// There are two possible solutions to add new properties to an object. Let's take a simple object to
// explain these solutions.

// Using dot notation: This solution is useful when you know the name of the property
myObject.firstName = "Huseyn";
myObject.lastName = "Mirzayev";

// Using square bracket notation: This solution is useful when the name of the property is dynamically determined.

myObject["key3"] = "value3";

////////////////////////////////////////////////////////////////////////////////////////////////

// 8. What is a conditional operator in javascript?

// The conditional (ternary) operator is the only JavaScript operator that takes three operands
// which acts as a shortcut for if statements.

const age = 25;
const isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult); // Output: "Adult"

////////////////////////////////////////////////////////////////////////////////////////////////

// 9. What are default parameters?

// In E5, we need to depend on logical OR operators to handle default values of function parameters. Whereas in ES6, Default function parameters feature allows parameters to be initialized with default values if no value or undefined is passed. Let's compare the behavior with an examples,

//ES5
var calculateArea = function (height, width) {
  height = height || 50;
  width = width || 60;
  return width * height;
};

console.log(calculateArea()); // Output: 300

//ES6
let calculateArea = function (height = 50, width = 60) {
  return width * height;
};

console.log(calculateArea()); // Output: 300

////////////////////////////////////////////////////////////////////////////////////////////////

// 10. Which value is not equal to itself in javascript?

// In JavaScript, the value that is not equal to itself is NaN (Not-a-Number).

// The equality comparison with NaN always results in false, even when comparing it to another NaN. This behavior is a unique characteristic of NaN, and it is consistent with the definition of NaN representing an "indeterminate" or "undefined" numeric result.

const result = NaN == NaN;
console.log(result); // Output: false

////////////////////////////////////////////////////////////////////////////////////////////////

// 11. What are lambda or arrow functions?

// An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target. These functions are best suited for non-method functions, and they cannot be used as constructors.

////////////////////////////////////////////////////////////////////////////////////////////////

// 12. What is a strict mode in javascript?

// Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression 'use strict' instructs the browser to use the javascript code in the Strict mode.

////////////////////////////////////////////////////////////////////////////////////////////////

// 13. How do you declare strict mode?

// The strict mode is declared by adding "use strict"; to the beginning of a script or a function. If
// declared at the beginning of a script, it has global scope.

("use strict");

x = 3.14; // This will cause an error because x is not declared

// and if you declare inside a function, it has local scope

x = 3.14; // This will not cause an error.

myFunction();

function myFunction() {
  "use strict";
  y = 3.14; // This will cause an error
}

////////////////////////////////////////////////////////////////////////////////////////////////

// 14. Why do you need strict mode?

// Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors. For example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.

////////////////////////////////////////////////////////////////////////////////////////////////

// 15. What is undefined property?

// The undefined property indicates that a variable has not been assigned a value, or not declared
// at all. The type of undefined value is undefined too.

let user; // Value is undefined, type is undefined

console.log(typeof user); //undefined

// Any variable can be emptied by setting the value to undefined.

let userName = undefined;

////////////////////////////////////////////////////////////////////////////////////////////////

// 16. What is null value?

// The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values. The type of null value is object. You can empty the variable by setting the value to null.

let id = null;
console.log(typeof id); //object

////////////////////////////////////////////////////////////////////////////////////////////////

// 17. What would be the result of 1 + 2 +'3'?

// The output is going to be 33 . Since 1 and 2 are numeric values, the result of the first two digits is going to be a numeric value 3 . The next digit is a string type value because of that the addition of numeric value 3 and string type value 3 is just going to be a concatenation value 33 .

////////////////////////////////////////////////////////////////////////////////////////////////

// 18. What are the function parameter rules?

// 18.1 The function definitions do not specify data types for parameters.
// 18.2 It does not perform type checking on the passed arguments.
// 18.3 It does not check the number of received arguments.

////////////////////////////////////////////////////////////////////////////////////////////////

// 19. How do you empty an array?

// You can empty an array quickly by setting the array length to zero.

let cities = ["Singapore", "Delhi", "London"];
cities.length = 0; // cities becomes []

////////////////////////////////////////////////////////////////////////////////////////////////

// 20. How do you create an infinite loop?

while (true) {
  // Your content goes here
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
