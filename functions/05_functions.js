const user ={
    username: "Lakshya",
    price: 6999,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username} to our website. Your total price is ${this.price}`);
        // this refers to the object that is calling the function. In this case, it refers to the user object.
    console.log(this); // this will give the output of the user object because it is called inside the welcomeMessage function which is a method of the user object.
    }
}

user.welcomeMessage(); // calling the function to execute the code inside it. It will give the output of the function welcomeMessage.
user.username = "John"; // changing the value of the username property of the user object.
user.welcomeMessage(); // calling the function to execute the code inside it. It will give the output of the function welcomeMessage with the updated username property of the user object.

console.log(this)

// function hi(){
//     let username = "Lakshya";
    
//     console.log(this); // this will give the output of the global object because it is called inside the hi function which is a regular function.
// }

// hi(); // calling the function to execute the code inside it. It will give the output of the global object.

// this only works in objects and classes.
//  It does not work in regular functions. In regular functions, this refers to the global object.
//  In objects and classes, this refers to the object or class that is calling the function.

// arrow functions->
const user2 = () => {
    let username = "Lakshya";
    console.log(this); // this will give the output of the global object because it is called inside the user2 arrow function which is a regular function.
}

user2(); // calling the function to execute the code inside it. It will give the output of the global object.



const addTwo = (a,b) => {
    return a + b;

}

console.log(addTwo(5,10)); // calling the function to execute the code inside it. It will give the output of the function addTwo.

// implicit return->

const addThree = (a,b,c) => a + b + c; // implicit return because we are not using the return keyword. It will return the value of the expression after the arrow.
const addfour= (a,b,c,d)=>(a + b + c + d); // implicit return because we are not using the return keyword. It will return the value of the expression after the arrow.

// console.log(addThree(5,10,15));
// console.log(addfour(5,10,15,20));

// if i want to return an object from an arrow function, i have to wrap the object in parentheses. 
// Otherwise, it will give an error because the curly braces will be interpreted as a block of code instead of an object.

const returnObject = (a,b) => ({a:a, b:b});
 // implicit return because we are not using the return keyword. It will return the value of the expression after the arrow.

 console.log(returnObject(5,10)); // calling the function to execute the code inside it. It will give the output of the function returnObject.

const myArray = [1,2,3,4,5,6,7,8,9,10];
