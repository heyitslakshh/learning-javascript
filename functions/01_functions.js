function sayMyName() {
    console.log("My name is Lakshya Srivastava");
}
sayMyName() // calling the function to execute the code inside it.

function addTwoNumbers(num1, num2) {
    return num1 + num2;
    
}
console.log(addTwoNumbers(5, 10)); // calling the function to execute the code inside it.

function multiplyTwoNumbers(num1, num2) {
    return num1 * num2;
    console.log("This line will never be executed because it is after the return statement.");
}

multiplyTwoNumbers(5, 10); // calling the function to execute the code inside it.

//parameters are the values that we pass to the function when we call it.
//arguments are the values that we pass to the function when we call it. 
// They are the same thing, but the term "parameters" is used when we define the function, and the term "arguments" is used when we call the function.

const result = multiplyTwoNumbers(5, 10); // calling the function to execute the code inside it.
console.log("result:",result); // it will give the output of the function multiplyTwoNumbers.

function userLogin(username){
    if (username ===undefined){
        console.log("Please provide a username to login.");
        return "Login failed.";
    }
    return `${username} has just logged in.`;

}

console.log(userLogin("Lakshya")); // calling the function to execute the code inside it.3
console.log(userLogin()); // calling the function to execute the code inside it. It will return undefined because we didn't pass any argument to the function.

