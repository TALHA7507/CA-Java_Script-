//         Variable

//* let*  is changeable variable
let name = " TALHA ";
name = " TALHA RIAZ ";
let age = 20;
age = 22;
console.log(name, age);

//* const * is unchangeable variable
const  id = 6241;
//id = 7507;   This will give error
console.log(id);

//* Var * is also changeable variable but its use is discouraged in modern JavaScript                   
var a = 7;
var a = 50;
console.log(a);

//        * Data Types *

// 1. Primitive Data Types       2. Non-Primitive Data Types

/* 1. Primitive Data Types  ( 07_types )   Immutable means that the value cannot be changed
             a) String
             b) Number
             c) BigInt
             d) Boolean
             e) undefined
             f) null
             g) Symbol      */

let string = " TALHA RIAZ ";          // a) String 
let number = 6241;                    // b) Number 
let bigInt = 9007199254741991n;      // c) BigInt
let boolean = true;                   // d) Boolean 
let undef = undefined;                // e) undefined 
let nul = null;                       // f) null 
let symbol = Symbol(" TALHA RIAZ "); // g) Symbol 

console.log( string, typeof string );
console.log( number, typeof number );
console.log( bigInt, typeof bigInt );
console.log( boolean, typeof boolean );
console.log( undef, typeof undef );
console.log( nul, typeof nul );
console.log( symbol, typeof symbol );                   

// 2. Non-Primitive Data Types

/* 2. Non-Primitive Data Types  ( 03_types )     Mutable means that the value can be changed
             a) Object
             b) Array
             c) Function      */

let object = {
  name: " TALHA RIAZ ",
  age: 22,
  degree: " BSCS ",
}; // a) Object
object.age = 23; // Modifying object property

let array = [" TALHA ", 22, true, " BSCS "]; // b) Array
array[1] = 23; // Modifying array element
array.push(" RIAZ "); // Adding element to array
array.pop(); // Removing element from array
array.shift(); // Removing first element from array
array.unshift(" MR. TALHA "); // Adding element at first position in array

function add() {
  console.log(" Hello Talha "); // c) Function
  console.log(" This is a function ");
}

console.log(object, typeof object); // Object
console.log(array, typeof array); // Array
add(); // Function call

