/*
  In JavaScript, var, let, and const are used to declare variables, each with different behaviors and scopes. Here's a brief overview and examples of each:

  var

  Scope: Function scope.
  Can be redeclared and updated.
  Hoisted: Yes, to the top of their function scope.
*/

var greeting = "Hello, world!";
console.log(greeting); // Output: Hello, world!

function sayHello() {
    var greeting = "Hello from inside a function!";
    console.log(greeting); // Output: Hello from inside a function!
}
sayHello();
console.log(greeting); // Output: Hello, world!