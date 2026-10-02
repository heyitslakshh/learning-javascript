const score=400

const balance =new Number(100) //it is a wrapper object for the primitive number type.
// It allows you to create a Number object that can hold a numeric value and provides additional methods and properties for working with numbers. 
// However, it's generally recommended to use primitive number types (like score) instead of Number objects for most cases, as they are more efficient and easier to work with.
console.log(balance)
console.log(balance.toString())
console.log(balance.toFixed(2)) // This will output "100.00" because toFixed(2) formats the number with 2 decimal places.

const otherNumber=23.879

console.log(otherNumber.toPrecision(4)); // it will give precision of 4 digits which will output 23.88.

const hunderds=1000000
console.log(hunderds.toLocaleString("en-IN")); // it will give the number in indian format which will output 10,00,000
console.log(Number.MAX_VALUE); // it will give the maximum safe integer value that can be represented in JavaScript
console.log(Number.MAX_SAFE_INTEGER); // it will give the maximum safe integer value that can be represented in JavaScript