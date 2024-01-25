/*

  # const

  Scope: Block scope.
  Cannot be updated or redeclared.
  Hoisted: Yes, but not initialized.
  Must be initialized at declaration.

*/

const PI = 3.14;
console.log(PI); // Output: 3.14

// PI = 3.14159; // This will cause an error

if (true) {
    const PI = 3.14159;
    console.log(PI); // Output: 3.14159 (different scope)
}
console.log(PI); // Output: 3.14