//nested scope is a situation where a function is defined inside another function.
//  The inner function has access to the variables and parameters of the outer function,
//  but the outer function does not have access to the variables and parameters of the inner function.
function one(){
    const username="Lakshya";

    function two(){
        const website="www.lakshyasrivastava.com";
        console.log(`The username is ${username} and the website is ${website}`);
    }
   // console.log(`The username is ${username} and the website is ${website}`); // this will give an error because website is not defined in this scope.

    two();

}

//one(); 

if (true) {
    const username="Lakshya";
    if(username==="Lakshya"){
        const website="www.lakshyasrivastava.com";
        //console.log(`The username is ${username} and the website is ${website}`);
    }
    //console.log(website); // this will give an error because website is not defined in this scope.
}

//console.log(username); // this will give an error because username is not defined in this scope.

//important->

console.log(hello(5)); // calling the function to execute the code inside it. It will return 6 because we passed 5 as an argument to the function and the function adds 1 to it and returns the result.

function hello(num){
    return num +1

}
//console.log(addtwo(8)); // show error because addtwo is defined using function expression and it is not hoisted. It can only be called after it is defined.
console.log(hello(5)); // calling the function to execute the code inside it. It will return 6 because we passed 5 as an argument to the function and the function adds 1 to it and returns the result.

const addtwo = function(num){
    return num + 2
}   
console.log(addtwo(5)); // calling the function to execute the code inside it. It will return 7 because we passed 5 as an argument to the function and the function adds 2 to it and returns the result.