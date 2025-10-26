//                  * Operators *

// Arithmetic Operators
let a = 10;
let b = 5;

let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

// Comparison Operators

console.log("Is a equal to b?", a == b); // Equal to
console.log("Is a not equal to b?", a != b); // Not equal to
console.log("Is a greater than b?", a > b); // Greater than
console.log("Is a less than b?", a < b); // Less than
console.log("Is a greater than or equal to b?", a >= b); // Greater than or equal to
console.log("Is a less than or equal to b?", a <= b); // Less than or equal to

// Logical Operators

let x = true;
let y = false;

console.log("x AND y:", x && y); // Logical AND
console.log("x OR y:", x || y); // Logical OR
console.log("NOT x:", !x); // Logical NOT

//              * Conditional Statements *

// If-Else Statement
let age = 18;

if (age < 18) {
    console.log("You are a child.");
} else if (age === 18) {   // Strict equality check
    console.log("You just became an adult.");
} else {
    console.log("You are an adult.");
}

// Switch Statement
let day = 4;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
}

console.log("Day:", dayName);




//              * Loops *

//For Loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// While Loop

let j = 5;
while (j < 9) {
    console.log(j);
    j++;
}


// Do-While Loop

let i = 10;
do {
    console.log(i);
    i++;
} while (i < 15);