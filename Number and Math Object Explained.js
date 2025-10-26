  let num =50;
let num2 = 345.678965;

let a = num2.toFixed(1);
console.log(a);  // precision to 1 decimal place
console.log(typeof a);

console.log(num2.toFixed(3));  // precision to 3 decimal places
console.log(Number.isInteger(num)); // check if num is an integer
console.log(Number.isInteger(num2)); // check if num2 is an integer
console.log(typeof num); // check type of num
console.log(num2.toPrecision(5)); // total number of significant digits
console.log(num2.toString(2)); // convert num2 to binary string
 

let b = new Number(750); // Creating a Number object
console.log(b); // Output the Number object
console.log(typeof b); // Check the type of b
console.log(b.valueOf()); // Get the primitive value of the Number object

 //  non_primitive : reference base pe kaam karta hai
 // primitive : Copy by value base pe kaam karta hai

// Math is a Built-in Object Examples

console.log(Math.PI); // Output the value of PI
console.log(Math.abs(-5)); // Output the absolute value of -5
console.log(Math.ceil(4.4)); // Output the smallest integer greater than or equal to 4.4
console.log(Math.floor(4.7)); // Output the largest integer less than or equal to 4.7
console.log(Math.round(4.5)); // Output the value of 4.5 rounded to the nearest integer 
console.log(Math.max(1, 3, 2, 8, 5)); // Output the maximum value among the given numbers
console.log(Math.min(1, 3, 2, 8, 5)); // Output the minimum value among the given numbers
console.log(Math.random()); // Output a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.sqrt(4)); // Output the square root of 4 
console.log(Math.floor(Math.random() * 10)); // random number between 0 and 10
console.log(Math.floor(Math.random() * 6)+1); // random number between 1 and 6

// random number between 15 and 25
console.log(Math.floor(Math.random() * 10)+15); // random number between 15 and 25


// formula : Math.floor(Math.random() * (max - min + 1)) + min
//random otp between 1000 and 9999
console.log(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000); // random number between 1000 and 9999
