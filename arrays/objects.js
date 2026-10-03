// object is declared like literals 

// synatx of object

const mysym = Symbol("key1")

const user = {
    "full name":"kumar lakshya",
    name: "lakshya",//here name is key and the value is lakshya .
    age: 21,
    [mysym]:"mykey1",
    email: "kumarlakshya754@gmail.com",
    location: "Greater Noida",
    isLoggedin: true,
    lastLoggedin: ["monday", "tuesday"]
}
//two methods of calling object.
console.log(user.email) // but by this method you cannot call the first full name key from this object .
console.log(user["email"]) // by this method you can call any object
console.log(typeof user[mysym])

user.email="chatgpt.com"
console.log(user.email)