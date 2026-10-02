let score = "100"

let valueinnumber = Number(score) // converts string to number capital N is used for conversion

console.log(typeof valueinnumber); // This will output 100

let score2="100abc"

let valueinnumber2 = Number(score2) // converts string to number

console.log(typeof valueinnumber2); // This will output NaN

console.log(valueinnumber2); // This will output NaN
let ans=""

let ans2= "hello"
let boolenans= Boolean(ans) // converts string to boolean output will be false because ans is empty string

console.log(boolenans);

console.log(Boolean(ans2)); // converts string to boolean   output will be true because ans2 is not empty string