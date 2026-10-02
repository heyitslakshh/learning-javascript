console.log(Math);
console.log(Math.PI); // This will output the value of PI
console.log(Math.abs(-5)); // This will output 5
console.log(Math.round(4.7)); // This will output 5 because it rounds to the nearest integer
console.log(Math.floor(4.7)); // This will output 4 because it rounds down to the nearest integer
console.log(Math.ceil(4.1)); // This will output 5 because it rounds up to the nearest integer

console.log(Math.min(1, 2, 3, 4, 5)); // This will output 1 because it is the minimum value
console.log(Math.max(1,2,3,4)); // This will output 4 because it is the maximum value
console.log(Math.random()); // This will output a random number between 0 and 1

console.log(Math.pow(2, 3)); // This will output 8 because it calculates 2 raised to the power of 3
let start=1
let end =6
//predicting dice roll
console.log(Math.floor(Math.random() * (end - start + 1)) + start)