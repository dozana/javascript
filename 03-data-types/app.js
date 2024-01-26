// PRIMITIVE Types (6 primitive types)

// String
const fullName = 'John Doe';
console.log(typeof fullName); // string

// Number
const age = 45;
console.log(typeof age); // number

// Boolean
const hasKids = true;
console.log(typeof hasKids); // boolean

// Null
const car = null;
console.log(typeof car); // object (type null is object because it's a bug, it is a primitive type)

// Undefined
let test;
console.log(typeof test); // undefined

// Symbol
const sym = Symbol();
console.log(sym); // Symbol()




// REFERENCE Types - Objects

// Array
const hobbies = ['movies', 'music'];

// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}

const today = new Date();
console.log(today); // 2024-01-26T14:23:17.127Z
console.log(typeof hobbies) // object



