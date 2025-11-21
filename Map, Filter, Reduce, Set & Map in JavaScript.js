//     ForEach, Map, Filter, Reduce, Map, Set in JavaScript

/*

// ForEach
const arr= [1, 2, 3, 4, 5];
arr.forEach((num) => {
    console.log(num);
});


            // number
const arr= [1, 2, 3, 4, 5];
arr.forEach((num) => {
    console.log(num*2);
});


         // number, index
const arr= [1, 2, 3, 4, 5];
arr.forEach((num, index) => {
    console.log(num, index);
});


        // number, index, array
const arr= [1, 2, 3, 4, 5];
arr.forEach((num, index, arr) => {
    console.log(num, index, arr);
});




const arr= [1, 2, 3, 4, 5];
let sum=0;
arr.forEach((num) => {
    sum+=num;
});
console.log("Sum is:", sum);  // Sum is: 15



         //       filter

const arr = [4, 10, 23, 15, 8, 42, 16];
const newarr = arr.filter((num) => num>15);
console.log(newarr);       // [23, 42, 16]




         //     Prototype Use 
 
const arr = [4, 10, 23, 15, 8, 42, 16];
Array.prototype.filtering = function(compare){
    const result = [];
    for(let num of this){
        if(compare(num)){
            result.push(num);
        }
    }
    return result;
}
const newArr = arr.filtering((num) => num>15);
console.log(newArr);

const words = ["apple", "banana", "grape", "kiwi", "mango", "avocado"];
const answer = words.filtering((num) => num.length>4);
console.log(answer);   // [ 'apple', 'banana', 'grape', 'mango', 'avocado' ]
 



//   Map in JavaScript

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((num) => num*2);
console.log(newArr);   // [2, 4, 6, 8, 10]                                                                                                                                                                                                                                                        





              //        Reduce in JavaScript

//  accumulator  and currentValue

//  accumulator ko hm sum keh skty hn 
//  currentValue ko hm num keh skty hn jo maujada array ka har element hoga mtlb jo hmara current element hoga jsy hm add/sum kr rhy hn

const obj = [
                {id: 1, name: "John", age: 25, city: "New York", profession: "Developer", salary: 5087, experience: 3},
                {id: 2, name: "Jane", age: 30, city: "San Francisco", profession: "Designer", salary: 6054, experience: 5},
                {id: 3, name: "Mike", age: 28, city: "Chicago", profession: "Manager", salary: 7034, experience: 4},
                {id: 4, name: "Emily", age: 32, city: "Los Angeles", profession: "Developer", salary: 8043, experience: 6},
                {id: 5, name: "David", age: 27, city: "Seattle", profession: "Tester", salary: 1000, experience: 2}
];
const totalSalary = obj.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.salary;
}, 0);
console.log("Total Salary is:", totalSalary);  // Total Salary is: 27318






                //   data structure in JavaScript

    //  1.   * Set *
    
const arr = [1, 2, 2, 3, 4, 4, 5, 1, 7, 8, 8, 2, 9];
console.log("Original Array:", arr);   // Original Array: [ 1, 2, 2, 3, 4, 4, 5, 1, 7, 8, 8, 2, 9 ]
const newarr = new Set(arr);

    // or agr mjy is ma koi or value add b krni to ma esy kro ga
newarr.add(14);
console.log("Add Value is :", newarr);  // Set Array: { 1, 2, 3, 4, 5, 7, 8, 9 }  or add 14

  // agr mjy chk krna k value ha majood to phr 

console.log(`Value Check is :`, newarr.has(7));

  // agr mjy value delete krni to phr ma 

newarr.delete(4);
console.log(`delete is :`, newarr);

  // agr mjy size pta krna k ktna ha arra ka o ma 

console.log(`Size is :`, newarr.size);

  // age mjy sri values clear krni to ma 

newarr.clear();
console.log(`Clear Values :`, newarr);  



*/


           //   * MAP *     is a Data Structure

const m1 = new Map([
    ["Talha", 10],     // String, Number
    [20, "Taha"],     // Numbr, String
    [true, 13],      // Boolean, Number
    [[10, 20, 30, 40, 50], "Ali"]       // Array, String
]);

  // Add / Update
m1.set({name: " Tayyab", age:20}, true);      //   key : string, Value : Number 
console.log(m1);

  // chk krna ho k is ma ye cheez ha to 
console.log(m1.has("Talha"));       // true or false

  // chk kry ga k is k mdmukabil / sth kya ha knsi value ha 
console.log(m1.get("Talha"));   

  // ma delete kr skta hu koi key
console.log(m1.delete); 

