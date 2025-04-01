//hoisting is a mechanism where variables and functions declarations are moved at the top
//of their containing scope(either global or function scope) before code execution

//key concepts:
//1. Only declaraions are hoisted not initializations
    // Variables declared with var are hoisted and initialized with undefined.

    // let and const are hoisted but remain in the "Temporal Dead Zone" (TDZ) until assigned.

    // Function declarations are fully hoisted (name + body).

    // Function expressions (assigned to variables) follow variable hoisting rules.
//2. Temporal Dead Zone(TDZ) for let and const
        // Accessing them before declarations throws a ReferenceError.

//examples
// 1. variable Hoisting
//var(hoisted, initialized as undefined)

console.log(x); // undefined (hoisted but not yet assigned)
var x = 5;
console.log(x); //5

// 2. let and const (hoisted but TDZ)
console.log(y); //ReferenceError: Cannot access 'y' before initialization
let y = 10;

//function hoisting - function declaration (fully hoisted)
sayHello(); // "Hello!" (works because the whole function is hoisted)

function sayHello() {
    console.log("Hello!");
}

// Function Expression (follows variable hoisting rules)
sayHi(); // ❌ TypeError: sayHi is not a function (var hoisted as `undefined`)

var sayHi = function() {
    console.log("Hi!");
};

// 3. Class Hoisting
// Class declarations are hoisted but remain in the TDZ (like let/const).
const obj = new MyClass(); // ❌ ReferenceError: Cannot access 'MyClass' before initialization
class MyClass {}

// ✅ var → Hoisted, initialized as undefined.
// ✅ let & const → Hoisted but in TDZ (error if accessed early).
// ✅ Function declarations → Fully hoisted (can be called before declaration).
// ❌ Function expressions & arrow functions → Follow variable hoisting rules.
// ❌ Class declarations → Hoisted but remain in TDZ.

// Best Practices
// ✔ Use let/const instead of var to avoid unexpected hoisting issues.
// ✔ Declare variables at the top of their scope.
// ✔ Define functions before calling them (even though they’re hoisted, it’s clearer).
