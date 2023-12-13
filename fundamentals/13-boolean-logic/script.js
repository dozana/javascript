// Basic BOOLEAN Logic: The AND, OR & NOT Operators

/*
  A: Sarah has a driver's licence
  B: Sarah has a good vision

  AND
  true when ALL are true

  OR
  true when ONE is true

  NOT A, NOT B
  Invert true/false value

*/




let hasLicense = true;
let goodVision = true;

if (hasLicense && goodVision) {
  console.log("Sarah can drive.");
} else {
  console.log("Sarah cannot drive.");
}


/*
  A: Age is greater or equal 20
  B: Age is less than 30

  AND
  true when ALL are true

  OR
  true when ONE is true

  NOT A, NOT B
  Invert true/false value


  The AND operator checks if age is both greater than or equal to 20 and less than 30.
  The OR operator checks if age is either less than 20 or greater than or equal to 30.
  The NOT operator is used to invert the conditions individually (NOT A checks if age 
    is not greater than or equal to 20, and NOT B checks if age is not less than 30).
*/

let age = 25;

// AND Operator
if (age >= 20 && age < 30) {
  console.log("Age is greater or equal to 20 AND less than 30.");
} else {
  console.log("Age does not meet the specified conditions.");
}

// OR Operator
if (age < 20 || age >= 30) {
  console.log("Age is less than 20 OR greater or equal to 30.");
} else {
  console.log("Age meets the specified conditions.");
}

// NOT A
if (!(age >= 20)) {
  console.log("Age is NOT greater or equal to 20.");
} else {
  console.log("Age is greater or equal to 20.");
}

// NOT B
if (!(age < 30)) {
  console.log("Age is NOT less than 30.");
} else {
  console.log("Age is less than 30.");
}