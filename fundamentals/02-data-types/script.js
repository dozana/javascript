// Objects and primitives

// The 7 Primitive data types

// Number - Floating point numbers (decimals and integers)
let age = 23;

// String - Sequence of characters (used for text)
let firstName = "John"

// Boolean - Logical type that can only be true or false (used for taking decision)
let fullAge = true;
if(fullAge) {
  console.log("You are full age");
}


// Undefined - Value taken by a variable that is not yet defined (empty value)
let children;

// Null - Also means 'empty value'

// Symbol (ES2015) - Value that is unique and cannot be changed 

// BigInt (ES2020) - Larger integers than the Number type can hold



console.log(typeof age);
console.log(typeof firstName);
console.log(typeof fullAge);
console.log(typeof children);

fullAge = 'Yes';
console.log(typeof fullAge);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(year);

console.log(typeof null);