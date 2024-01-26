# What's the difference between var, let and const

The primary differences between var, let, and const in JavaScript revolve around scope, hoisting, and reassignment. Here's a detailed comparison:

# Scope

var: Function scope. This means that when a variable is declared using var inside a function, it's accessible anywhere within that function, regardless of block statements (like if, for, while).

let and const: Block scope. They are limited to the block (denoted by {}) in which they are defined. This makes them more predictable and safer to use in scenarios like loops, conditionals, and other block statements.

# Hoisting

var: Variables declared with var are hoisted to the top of their enclosing function scope (or global scope if declared outside a function). However, only the declaration is hoisted, not the initialization.
let and const: They are also hoisted to the top of their block, but they are not initialized. Accessing them before the actual declaration results in a ReferenceError. This behavior is often referred to as the "temporal dead zone."

# Reassignment and Redeclaration

var: Can be redeclared and reassigned within its scope. This can lead to bugs, especially in loops or function-heavy code.
let: Can be reassigned but cannot be redeclared within the same scope. This reduces the risk of bugs associated with unintentionally redeclaring variables.
const: Cannot be reassigned or redeclared. It must be initialized at the time of declaration. This is useful for declaring constants or when you want to ensure that a variable's value should not change throughout your code.

# Initialization

var and let: Can be declared without being initialized (i.e., without assigning a value initially).
const: Must be initialized with a value at the time of declaration.
Example Illustrating Differences:

if (true) {
    var varVariable = "Accessible outside this block";
    let letVariable = "Restricted to this block";
    const constVariable = "Also restricted to this block";
}

console.log(varVariable); // Works fine
console.log(letVariable); // ReferenceError: letVariable is not defined
console.log(constVariable); // ReferenceError: constVariable is not defined

In this example, varVariable is accessible outside the block due to function scoping, while letVariable and constVariable are not, illustrating block scoping. The let and const declarations help prevent accidental access or modification of variables outside of their intended scope.