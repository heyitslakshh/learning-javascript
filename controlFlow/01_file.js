const userLoggedInEmail = true;
const userLoggedInGoogle = false;

if (userLoggedInEmail || userLoggedInGoogle) {  
    console.log("User is logged in"); // this will give the output because userLoggedInEmail is true.
}

if (userLoggedInEmail && userLoggedInGoogle) {
    console.log("User is logged in"); // this will not give the output because userLoggedInGoogle is false.
}

