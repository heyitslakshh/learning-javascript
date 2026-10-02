/*
stack is used in primitive data types and heap is used in non-primitive data types.
stack is used for static memory allocation and heap is used for dynamic memory allocation.
whatever variable is decleared in satck we get a copy of that variable in stack and 
if we change the value of that variable in stack it will not affect the value of that variable in heap.
variable defined in heap we get a reference of that variable 

*/
let user ={
    email:"kumarlakshya754@gmail.com",
    upi:"lakshya@ybl"
}
let user2 = user // user2 is a reference to the same object in heap as user
console.log(user2.email); // This will output "kumarlakshya754@gmail.com"
user2.email="kumar_2400372@gmail.com"
console.log(user.email); // This will output "kumar_2400372@gmail.com"
console.log(user2.email); // This will output "kumar_2400372@gmail.com"
