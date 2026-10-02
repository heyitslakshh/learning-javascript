// string interpolation is a way to embed expressions inside string literals.
//  In JavaScript, you can use template literals (enclosed by backticks ``) to achieve this. Here's an example:
//all methods of strings.

let name = "lakshya";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old.`);
const getname= new String("lakshya-kumar");
console.log(getname);
console.log(getname.toString()); //it will convert the string object to a primitive string
console.log(getname[4]); //it will give the character at index 4
console.log(getname.length); // it will give the length of the string
console.log(getname.__proto__); // it will give the prototype of the string object
console.log(getname.charAt(4)); // it will give the character at index 4
console.log(getname.toUpperCase()); // it will convert the string to uppercase

const newString= getname.slice(0, 6); // it will give a substring from index 0 to 6 
// it will also allow negative index which will count from the end of the string.
console.log(newString);

const newString2= getname.substring(0, 6); // it will give a substring from index 0 to 6
console.log(newString2);

const newString3= "  lakshyabhai"

console.log(newString3.trim());//it will remove the whitespace from the start and end of the string

const url="https://www.lakshyabhai.com/"
console.log(url.replace('https://','http://')); // it will replace the first occurrence of the string with the new string
console.log(url.includes('lakshyabhai')); // it will return true if the string contains the specified string.

console.log(getname.split("-")); // it will split the string into an array of substrings based on the specified separator.
// their is also limit in split method which will limit the number of substrings returned.
