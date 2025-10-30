/*
let array = [ "Apple", "Banana", "Mango", "Orange" ]; // array of strings
console.log(array); // display the array

array[0] = "Grapes"; // modify element at index 0
console.log(array); // display modified array

array.push("Pineapple"); // add element at the end
console.log(array); // display array after push

array.pop(); // remove last element
console.log(array); // display array after pop

array.unshift("Strawberry"); // add element at the beginning / start
console.log(array); // display array after unshift

array.shift(); // remove first element
console.log(array); // display array after shift

let array = [ "Apple", "Banana", "Mango", "Orange", "Pineapple", "Grapes", "Strawberry", "Watermelon" ]; // array of strings
for ( let i = 0; i<array.length; i++ ) {
    console.log(array[i]); // display each element;
}

//  second method for looping through array
for ( let num of array) {
    console.log(num); // display each element using for..of loop
}


let a = [ " Talha ", " Ahmed ", " Khan ", " Akbar ", " Ali " ]; // array of strings
let b = [ " 750 ", " 1122 ", " Mustafa ", " 9988 ", " 3344 " ] // another array of strings
let c = a.concat(b); // concatenate arrays a and b

let d = [ " Zain ", " Asad " ]; // another array of strings
let e = c.concat(d); // concatenate array c with array d
console.log(e); // display concatenated array


// array into an array problem
let f = [a, b, c, d, e]; // array of arrays
console.log(f); // display array of arrays

// the solution of array into an array problem is to use * spread operator * 
let g = [...a, ...b, ...c, ...d, ...e]; // use spread operator to flatten arrays
console.log(g); // display flattened array


//
let array = [ "Apple", "Banana", "Mango", "Orange", "Pineapple"]; // array of strings
console.log(array.toString()); // display array as string

console.log(array.join(" - ")); // display array elements joined by " - "
console.log(array.join(" | ")); // display array elements joined by " | "
console.log(array.join(" * ")); // display array elements joined by " * "
console.log(array.join(" -- ")); // display array elements joined by " -- "


// sorting arrays


let numbers = [ 4, 12, 7, 3, 8, 89, 67, 1, 2, 9 ]; // array of numbers
numbers.sort(); // sort numbers in ascending order
console.log(numbers); // display sorted numbers        // wrong way to sort numbers

// or second method for sorting numbers in ascending order
console.log(numbers.sort((a, b) => a - b)); // display sorted numbers using compare function    best method

// or third method for sorting numbers in ascending order 
console.log(numbers.sort()); // display sorted numbers using sort method

let numbers = [ 4, 12, 7, 3, 8, 89, 67, 1, 2, 9 ]; // array of numbers

// descending order sorting

console.log(numbers.sort((a, b) => b - a)); // display sorted numbers in descending order       // best way 
console.log(numbers.sort().reverse()); // display sorted numbers in descending order using reverse method       // wrong way



//  flattening arrays

// problem of nested arrays
let array = [ " Apple ", " Banana ", " Mango ", [ " Orange ", " Pineapple "  , [ " Grapes ",  " Strawberry ", " Watermelon " ],  " Peach ", " Kiwi "  ] ]; // array with nested arrays
console.log(array[3]); // display nested array at index 3
console.log(array[3][0]); // display element at index 0 ( " Orange " ) of nested array at index 3


// now the solution of flattening nested arrays
// flattening for 1 level nested arrays
let a = array.flat(); // use flat() method to flatten nested arrays 
console.log(a); // display flattened array

// flattening for 2 or multiple level nested arrays
let b = array.flat(2); // use flat(2) method with depth 2 to flatten nested arrays
console.log(b); // display fully flattened array

// you can also use Infinity to flatten all levels of nested arrays 
let c = array.flat(Infinity); // use flat(Infinity) method to flatten all levels of nested arrays
console.log(c); // display fully flattened array

*/

