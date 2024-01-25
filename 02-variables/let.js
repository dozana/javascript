/*

  let

  Scope: Block scope (i.e., inside curly braces {}).
  Can be updated but not redeclared in the same scope.
  Hoisted: Yes, but not initialized.

*/

let count = 1;
console.log(count); // Output: 1

if (true) {
    let count = 2; // This is okay, as it's a new block scope
    console.log(count); // Output: 2
}
console.log(count); // Output: 1