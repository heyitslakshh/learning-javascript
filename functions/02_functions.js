function calculatecartprice(...cartItems) {
    return cartItems
}

console.log(calculatecartprice(10, 20, 30, 40, 50)); // calling the function to execute the code inside it.

const user={
    username:"Lakshya",
    price:6999
}

function anyobject(obj){
    console.log(`username is ${obj.username} and price is ${obj.price}`);
}

anyobject(user);

const mynewarray=[1,2,3,4,5,6,7,8,9,10];

function anyarray(arr){
    console.log(`The array is ${arr}`);
}

anyarray(mynewarray);