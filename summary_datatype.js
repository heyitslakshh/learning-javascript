/* primitive data types are of 7 types in JavaScript.Actually the datatypes are call by value.
They are:-
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

2nd type of datatype is non-primitive is  object which is call by reference.
 It can hold multiple values and properties.
1. Object
2. Array
3. Function

const is a keyword used to declare a variable that cannot be reassigned.
 It is block-scoped, meaning it is only accessible within the block it is defined in.
 However, if the variable is an object or array, its properties or elements can still be modified.

javascript is a dynamically typed language, which means that you don't have to specify the data type of a variable when you declare it. 
The data type is determined automatically based on the value assigned to the variable.

if we check typeof null it will return object which is a known issue in JavaScript.
*/

const id =Symbol("123")
const id2 =Symbol("123")

console.log(id===id2); // This will output false because each Symbol is unique, even if they have the same description

const bingintValue = 1234567890123456789012345678901234567890n; // The 'n' at the end indicates that this is a BigInt
const heros =["shaktiman","naagraj","doga","daredevil"]
let myobj={
    name:"jethalal",
    age: 50,
}

function myfunction(){
    console.log("hello world");
}
myfunction(); // This will call the function and output "hello world" to the console

const myfunction2 = function(){
    console.log("hello lakshyabhai");
}
myfunction2(); // This will call the function and output "hello lakshyabhai" to the console

console.log(myfunction2.name); // This will output "myfunction2" because the function has a name property that returns the name of the function
console.log(typeof myfunction2); // This will output "function" because myfunction2 is a function