
// Valid Identifiers

// Rule 1: Must start with a letter, underscore (_), or dollar sign ($)
let myVar = 10;        // Starts with letter
let _privateVar = 20;  // Starts with underscore
let $special = 30;     // Starts with dollar sign

// Rule 2: Subsequent characters can be letters, digits, underscores, or dollar signs
let myVar123 = 40;
let _private_var_2 = 50;
let $var_name$ = 60;

// Rule 3: Cannot start with a number
// let 123var = 10;  // ❌ INVALID

// Rule 4: Cannot contain spaces or special characters (except _ and $)
// let my var = 10;      // ❌ INVALID
// let my-var = 10;      // ❌ INVALID
// let my@var = 10;      // ❌ INVALID

// Rule 5: Case-sensitive (myVar and MyVar are different)
let myVar_lowercase = 100;
let MyVar_uppercase = 200;
console.log(myVar_lowercase);  // 100
console.log(MyVar_uppercase);  // 200

// Rule 6: Cannot be reserved words
// let var = 10;       // ❌ INVALID (var is reserved)
// let let = 10;       // ❌ INVALID (let is reserved)
// let const = 10;     // ❌ INVALID (const is reserved)
// let function = 10;  // ❌ INVALID (function is reserved)
// let return = 10;    // ❌ INVALID (return is reserved)
// let if = 10;        // ❌ INVALID (if is reserved)
// let else = 10;      // ❌ INVALID (else is reserved)
// let for = 10;       // ❌ INVALID (for is reserved)

// Rule 7: Can be any length
let veryLongVariableNameThatStillWorksJustFine = 300;
let a = 400;

// Rule 8: Should use camelCase convention for readability
let firstName = "John";       // ✓ Good
let last_name = "Doe";        // ⚠ Works but not convention
let FirstName = "Jane";       // ⚠ PascalCase (used for classes)
let CONSTANT_VALUE = 500;     // ⚠ UPPER_SNAKE_CASE (used for constants)