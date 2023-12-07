// falcy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('John'));
console.log(Boolean({})); // empty object
console.log('');


const money = 0; // 0 is falsy value
if(money) {
  console.log("Don't spend it all.");
} else {
  console.log("You should get a job.");
}


let height;

if(height) {
    console.log('Yes!, height is defined');
} else {
    console.log('Height is undefined');
}