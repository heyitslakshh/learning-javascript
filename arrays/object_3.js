const course = {
    cousreName: "JavaScript",
    courseDuration: "3 months",
    courseInstructor: "jhonny deep",
    price: 1000
};

const {courseInstructor:instructor} = course

console.log(instructor);
 // it will give the value of the property cousreInstructor of the object course.

 const navbar= ({company, product, year}) => {

 }
 navbar({company:"Google",product:"Search Engine",year:1998}) 
 // it will give the values of the parameters passed to the function navbar.
 
// {
//     "name":"lakshya",
//     "age":30,
//     "course":"JavaScript",
//     "company":"Google"
// }
// json is javascript object notation.
//  It is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate
// . It is used to represent data in a structured way, and is often used in web applications to send and receive data between a client and a server.
