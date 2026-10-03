const marvelheros=["spiderman","iron man","thor"]
const dcheroes=["superman","flash","batman"]

// marvelheros.push(dcheroes)

// console.log(marvelheros)

const allheroes= marvelheros.concat(dcheroes) // concat is used here to merge the array.

console.log(allheroes)

const allheros=[...marvelheros, ...dcheroes] //here their is no limitation of using arrays we can use multiple arrays by doing this ...nameofarray and 
//it will do the same work of array conct.

const anotherarray = [1,2,3,4,5,[6,7,8],9,[4,5,[4,5]]] 

const realanotherarray= anotherarray.flat(2) //here we give depth as a parametere.

console.log(realanotherarray)

console.log(Array.isArray("hi")) // gives output false as it is not array.
console.log(Array.from('mukesh bhatt')) // it will make array

let score=100
let score2=200
let score3=300
console.log(Array.of(score,score2,score3)) // returns an array of new elements.