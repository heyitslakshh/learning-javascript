console.log(null>0); // This will output false because null is not greater than 0
console.log(null>=0); // This will output true because null is considered equal to 0 in this comparison
console.log(null==0); // This will output false because null is not equal to 0

console.log(undefined>0); // This will output false because undefined is not greater than 0
console.log(undefined>=0); // This will output false because undefined is not greater than or equal to 0
console.log(undefined==0); // This will output false because undefined is not equal to 0

console.log("1"===1); // This will output false because the types are different (string vs number) 
// strictly equal operator checks for both value and type
// avoid these type of comparisons in your code as they can lead to unexpected results.

