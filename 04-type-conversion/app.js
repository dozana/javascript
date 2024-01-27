let val;

// Number to string
val = String(5);
val = String(4+4);

// Bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello'); // NaN
val = Number([1,2,3]); // NaN

val = parseInt('100'); // number
val = parseFloat('100.30'); // number

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));