let myDate =new Date()
console.log(myDate); // This will output the current date and time
console.log(myDate.toString());
 // This will output the date and time in a human-readable format
console.log(myDate.toJSON()); 
// This will output the date and time in JSON format
console.log(myDate.toISOString()); 
// This will output the date and time in ISO format
console.log(myDate.toLocaleDateString()); 
// This will output the date in a locale-specific format
console.log(myDate.toLocaleTimeString()); 
// This will output the time in a locale-specific format
// date is also a object in javascript and we can use the methods of date object to get the date and time in different formats.

let myDate2 = new Date("2026-04-23") 
// we can also create a date object by passing a date string in ISO format
console.log(myDate2.toString()); 
// This will output the date and time for April 23, 2026
let myDate3 = new Date(2026, 3, 23,9,45) // we can also create a date object by passing year, month (0-indexed), and day and time
console.log(myDate3.toLocaleString());
 // This will output the date and time for April 23, 2026, at 9:45 AM in a locale-specific format
let mytimestamp = Date.now() 
// we can also get the current timestamp in milliseconds since January 1, 1970
console.log(mytimestamp)
console.log(myDate3.getTime())
 // we can also get the timestamp of a date object in milliseconds since January 1, 1970
console.log(myDate3.getTime()) 

console.log(Math.floor(myDate3.getTime()/1000)) 
//it will give the timestamp in seconds since January 1, 1970
 console.log(myDate3.getFullYear())
// it will give the year of the date object
console.log(myDate3.getMonth()+1) 
// it will give the month of the date object (0-indexed, so April is 3)
console.log(myDate3.getDate())
// it will give the day of the month of the date object
console.log(myDate3.getDay())
// it will give the day of the week of the date object (0-indexed, so Sunday is 0)
