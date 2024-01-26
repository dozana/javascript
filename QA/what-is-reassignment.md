# What is Reassignment?

Reassignment in programming refers to changing the value of an already declared variable. When you assign a new value to an existing variable, you are "reassigning" that variable. This is a common practice in programming, allowing variables to be updated with new values based on the logic and flow of the program.

In JavaScript, whether a variable can be reassigned depends on how it was declared:

Using var or let:

Variables declared with var or let can be reassigned. This means you can change the value of these variables after their initial declaration.
Example with let:
javascript
Copy code
let message = "Hello";
console.log(message);  // Output: "Hello"

message = "Goodbye";   // Reassignment
console.log(message);  // Output: "Goodbye"
Example with var:
javascript
Copy code
var count = 10;
console.log(count);  // Output: 10

count = 20;          // Reassignment
console.log(count);  // Output: 20
Using const:

Variables declared with const cannot be reassigned. Once a value is assigned to a const variable, it cannot be changed. Attempting to do so will result in a runtime error.
Example:
javascript
Copy code
const PI = 3.14;
console.log(PI);  // Output: 3.14

// Attempting to reassign
// PI = 3.14159;    // This will cause an error: TypeError: Assignment to constant variable.
Reassignment is a useful feature in programming, especially in scenarios where the value of a variable needs to change over time, such as counters in loops, state variables in applications, etc. However, it's important to use it judiciously to avoid unintended side effects, which is why const is preferred when you know the value should remain constant throughout the program.