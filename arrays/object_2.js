// const tinderUser= new Object() // it is an singelton object .

const tinder={
     // it is an non singelton object.
}
// console.log(tinderUser) 
tinder.id="name123"
tinder.name="Zayn"
tinder.age=32
console.log(tinder)

const regularuser={
     email:"lakshya754@gmail.com",
     fullname:{  //it is an nested object.
          firstname:"lakshya",
          lastname:"srivastava"
     }
}
console.log(regularuser.fullname);

const obj1={
     1:"a",
     2:"b"
}
const obj2={
     3:"c",
     4:"d"
}

// const obj3={obj1,obj2} 
// problem in this code is that it will give the object with obj1 and obj2 as properties. 
// but we want to merge the properties of obj1 and obj2 into a new object.
//  so we can use Object.assign() method to merge the properties of obj1 and obj2 into a new object.
// console.log(obj3) // it will give the object with obj1 and obj2 as properties.

const obj3=Object.assign({},obj1,obj2) // it will merge the properties of obj1 and obj2 into a new object.
console.log(obj3) // it will give the object with properties of obj1 and obj2 merged.

//this is the best way to merge the properties of two objects into a new object. ->
const obj4={...obj1,...obj2} // it will also merge the properties of obj1 and obj2 into a new object.
console.log(obj4) // it will give the object with properties of obj1 and obj2 merged.

// when the data comes fronm the database then it come in the form of the array of objects. 
// so we can use the map() method to get the data from the array of objects and create a new array of objects with the required properties.

const objdata=[
     { id: 1, name: "lakshya", age: 30 },
     { id: 2, name: "weekend", age: 25 },
     { id: 3, name: "zayn malik", age: 35 }
]
console.log(objdata[1].name)

 // it will give the keys of the object in an array.
console.log(Object.keys(regularuser))

// it will give the values of the object in an array.
console.log(Object.values(regularuser)) 

// it will give the key-value pairs of the object in an array of arrays.
console.log(Object.entries(regularuser))
 
// it will check if the object has the property or not and return true or false.
console.log(tinder.hasOwnProperty("name")) 
