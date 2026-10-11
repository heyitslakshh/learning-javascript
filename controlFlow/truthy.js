const userEmail ="lakshy@gmail.com";
const userPassword = undefined;
if (userEmail) {
    console.log("You are logged in");
}
else{
    console.log("You are not logged in");
}
if (userPassword) {
    console.log("You are logged in");
}
else {
    console.log("You are not logged in");
}
//"0" // this is a truthy value in JavaScript. zero inside a string is a truthy value.
//  It is not the same as the number 0, which is a falsy value.

// false , 0 -0, bigint 0n, "", null, undefined, NaN are all falsy values in JavaScript.
//  All other values are truthy values.

const emptyobject = {};

if (Object.keys(emptyobject).length === 0) {
    console.log("The object is empty"); //this is how we can check if an object is empty or not in JavaScript. 
    //We can use the Object.keys() method to get an array of the object's keys, and then check the length of that array. 
    // If the length is 0, then the object is empty.
}

let val1;
let val2;
val1=5 ?? 10;
 // this is called the nullish coalescing operator. It will return the value of the left operand if it is not null or undefined, otherwise it will return the value of the right operand.
val2= null ?? 10; // it will give the output of 10 because val2 is null.
 console.log(val1); // it will give the output of 5 because val1 is not null or undefined.
 console.log(val2); // it will give the output of 10 because val2 is null.

 //ternary operator->
 let val3 = 5 > 3 ? "Five is greater than three" : "Five is not greater than three";
 console.log(val3);
 //here ? is if and : is else. It is a shorthand way of writing an if-else statement. It is also called the conditional operator.
 