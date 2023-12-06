// if else statements

// Chack Age
const age = 15;

if(age >= 18) {
  console.log('Sarah can start driving license.');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is to young. Wait another ${yearsLeft} years`);
}


// Chack Century
const birthYear = 1991;

if(birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}