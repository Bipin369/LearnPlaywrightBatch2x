// Different Naming Conventions/Cases in JavaScript

// 1. camelCase - starts with lowercase, each new word capitalized
let firstName = "John";
let lastName = "Doe";
let phoneNumber = "123-456-7890";
let userEmailAddress = "john@example.com";
console.log("camelCase:", firstName, lastName);

// 2. PascalCase (UpperCamelCase) - each word starts with capital letter
// Used for class names and constructors
let FirstName = "Jane";
let LastName = "Smith";
class UserProfile {}
class DatabaseConnection {}
console.log("PascalCase:", FirstName, LastName);

// 3. snake_case - all lowercase with underscores between words
let first_name = "Bob";
let last_name = "Johnson";
let phone_number = "987-654-3210";
let user_email_address = "bob@example.com";
console.log("snake_case:", first_name, last_name);

// 4. UPPER_SNAKE_CASE - all uppercase with underscores
// Used for constants
const MAX_VALUE = 100;
const MIN_VALUE = 0;
const API_BASE_URL = "https://api.example.com";
const DATABASE_PORT = 5432;
console.log("UPPER_SNAKE_CASE:", MAX_VALUE, MIN_VALUE);

// 5. kebab-case - lowercase with hyphens (NOT valid for JavaScript variables)
// Used in HTML attributes, CSS classes, file names
// let user-name = "Tom";  // ❌ INVALID - Cannot use hyphens
// CSS class: <div class="user-profile"></div>
// File name: user-profile.js

// 6. dot.case (NOT valid for JavaScript variables)
// Used in configuration files, object properties
let obj = {};
obj.user_name = "Tom";  // ✓ Valid - dot notation for object properties
// ❌ let user.name = "Tom";  // Not valid as variable

// 7. flatcase - all lowercase no separators
let firstname = "Alice";
let lastname = "Brown";
let phonenumber = "555-1234";
console.log("flatcase:", firstname, lastname);

// Real-world Examples:
console.log("\n--- Real-World Examples ---");

// Variables: use camelCase
let isActive = true;
let hasPermission = false;
let getUserData = function() { return "data"; };

// Classes: use PascalCase
class UserController {}
class ProductService {}
class DatabaseManager {}

// Constants: use UPPER_SNAKE_CASE
const API_TIMEOUT = 30000;
const MAX_RETRIES = 3;
const ENVIRONMENT = "development";

// Private variables (convention): use underscore prefix with camelCase
let _internalValue = 100;
let _privateMethod = function() {};

console.log("All examples executed successfully!");