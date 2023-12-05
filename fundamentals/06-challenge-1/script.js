/*
CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
Your task is to write some code to help them:
1. Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
2. Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
3. Log the value of BMIMark and BMIJohn to the console.
BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too
TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);
console.log("Mark Higher BMI: " + markHigherBMI);