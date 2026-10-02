const myarr=[1, 2, 3, 4, 5];

console.log(myarr)

console.log(myarr.toString());

 // This will output "1,2,3,4,5" because it converts the array to a string
//  size of arrays in javascript is dynamic and can be changed at runtime. You can add or remove elements from an array at any time.

const marvelheroes=["Ironman", "Spiderman", "Hulk", "Thor", "Captain America"];

console.log(marvelheroes[0]);

console.log(marvelheroes.length); // This will output 5 because there are 5 elements in the array

marvelheroes.push("Black Widow");

console.log(marvelheroes);
// all the methods of array are available in javascript and we can use them to manipulate the array. 
// Some of the commonly used methods are -
//  push, pop, shift, unshift, splice, slice, indexOf, lastIndexOf, forEach, map, filter, reduce, etc.
marvelheroes.shift(); //it will remove the first element of the array and return it
console.log(marvelheroes);
marvelheroes.unshift("Black Panther"); // it will add the element at the beginning of the array
console.log(marvelheroes);
marvelheroes.splice(1,3);
 // it will remove the element at index 2 and return it

console.log("splice:", marvelheroes);
marvelheroes.splice(0, 0, "Doctor Strange", "Scarlet Witch"); //here start is the index where we want to start adding elements,
// 0 is the number of elements we want to remove, and the rest are the elements we want to add.      
console.log(marvelheroes) 

const newarr=marvelheroes.slice(0, 3);
console.log(newarr);

const newarr2=marvelheroes.join(" ** "); 
// it will join the elements of the array into a string with the specified separator
console.log(newarr2);

