//this is all about scopes in javascript. 
// Scopes are the context in which variables are defined and accessed. 
// There are three types of scopes in JavaScript: global scope, function scope, and block scope.
if (true) { /// this is a block scope.
        let a= 10
        const b=20
        var c=30

}
//console.log("a:",a); because a is defined using let, it is block scoped and cannot be accessed outside the block.
//console.log("b:",b); because b is defined using const, it is block scoped and cannot be accessed outside the block.
//console.log("c:",c); because c is defined using var, it is function scoped and can be accessed outside the block.

//thats why we dont use var to define variables because it can lead to unexpected behavior. 
// We should use let and const to define variables because they are block scoped and cannot be accessed outside the block.

let a= 10 // this is a global scope variable because it is defined outside any function or block.
