//   Strings

// A string is a sequence of characters used to represent text. In JavaScript, strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `) for template literals.
//   *  `  `  *  Backticks are a modern style to define strings and allows embedding expressions using ${expression} syntax.

const str = " Talha Riaz";  // double quotes
const str2 = ' 22 ';  // single quotes
const str3 =  ` a web
 developer/Programmer `; // backticks
 
const str4 =  "Talha,Taha,Saim,Ali,Hassan,Hussain,Ahmed"; // comma separated string
 console.log( ` Hello My name is ${str}. I am ${str2} years old. I am ${str3} `);

 let a = " Muhammad Talha Riaz ";
 let b = ' 22 ';
 let c = ` Web Developer `;
 let d = ` 3 `;
 let e = ` MY experience on ${c} is ${d} years. `;

 console.log( ` Hello! My name is ${a}. 
                I am ${b} years old.
                I am a ${c}.
                and ${e} `);

// String Methods

console.log(a.length); // length of string
console.log(a[4]); // access character at index 4
console.log(a.charAt(1)); // access character at index 1
console.log(a.concat(" - Web Developer")); // concatenate strings
console.log(a.toUpperCase()); // convert to uppercase
console.log(a.toLowerCase()); // convert to lowercase
console.log(a.slice(1,4)); // extract a section of the string                //slice mtlb katna (start, end)
console.log(a.slice(3)); // start from index 3 to the end
console.log(a.slice(-4)); // start from last 4 characters      // negative index
console.log(a.substring(1,5)); // extract a s ection of the string   //substring(start, end)  // similar to slice but doesn't accept negative indices
console.log(a.replace("Riaz", "Khan")); // replace a part of the string
console.log(a.trim()); // remove whitespace from both ends of the string         // trim mtlb khali spaces ki safai krna
console.log(a.indexOf("Riaz")); // get index of a substring
console.log(a.includes("Talha")); // check if substring is present
console.log(str4.split(",")); // split string into an array based on a delimiter


//        Dates


// A Date object in JavaScript represents a single moment in time. It contains a number that represents milliseconds since January 1, 1970, 00:00:00 UTC (the Unix Epoch).

let currentDate = new Date(); // current date and time

console.log(currentDate); // display current date and time
console.log(currentDate.toString()); // convert date to string
console.log(currentDate.toDateString()); // convert to date string
console.log(currentDate.toISOString()); // convert to ISO string
console.log(currentDate.getFullYear()); // get full year
console.log(currentDate.getMonth()); // get month (0-11)
console.log(currentDate.getDate()); // get day of the month (1-31)
console.log(currentDate.getDay()); // get day of the week (0-6)
console.log(currentDate.getHours()); // get hours (0-23)
console.log(currentDate.getMinutes()); // get minutes (0-59)
console.log(currentDate.getSeconds()); // get seconds (0-59)

let now = new Date();
console.log(` Current Date and Time is: ${now} `);