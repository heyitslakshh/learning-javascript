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

// false , 0 -0, bigint 0n, "", null, undefined, NaN are all falsy values in JavaScript.
//  All other values are truthy values.