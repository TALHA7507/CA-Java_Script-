// Scope, Closure and HOF (Higher Order Functions)

// FIRST  * Scope *

// Scope determines the accessibility of variables.
// There are THREE types of scope: Global Scope, Local Scope (Function Scope), and Block Scope.
// Global Scope: Accessible from anywhere in the code.
// Local Scope (Function Scope): Accessible only within the function where they are declared.
// Block Scope: Accessible only within the block (enclosed by curly braces) where they are declared.
//  ye 3 no scope valid hn * let or const * ke liye
// var  ka global or function scope hota hai lkn block scope nhi hota mtlb block ma ni chly ga var


//    SECOND  * Closure *


/*
function count(){
    let counter = 0; // local variable
    function increment(){
        counter++;
        return counter;
    }
    return increment;
}
let add = count();
console.log(add()); // 1 
console.log(add()); // 2
console.log(add()); // 3


function bank(){  
    let balance = 0;     // local variable
    function deposit(){   // inner function
        balance += 1000;   // updating the balance
        return balance;    // returning the updated balance
    }
    return deposit;     // returning the inner function
}
let myBank = bank();   // myBank is now a closure
console.log(myBank()); // 1000    // calling the closure
console.log(myBank()); // 2000
console.log(myBank()); // 3000



function pocketmoney(){
    let cash = 3000;
    function earn(){
        cash += 500;
        return cash;
    }
    return earn;
}
let mymoney = pocketmoney();
console.log(mymoney());



//  closure ka mtlb hai aik function apny outer function k variables
//  ko yaad rakh sakta hai.
// or un variables ko access kar sakta hai.
// jab aik function doosre function k andar define hota hai or inner
//  function ko outer function k bahar return ya pass kiya jata hai
//  to closure banta hai.
// closure data privacy or encapsulation provide karta hai.
// closure aksar HOFs (Higher Order Functions) ma use hota hai.
// closure ka use kar k hum private variables bana sakte hain.

              // closure usecase:

function counter(){
    let count = 0; // private variable
    return function(){
        count++;
        return count;
    }
}
let myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3



let user = {
    balance: 500,
    deposit: function(amount){
        if(typeof amount=== "number" && amount > 0){
            this.balance += amount;
            return this.balance;
        }
    }
};
console.log(user.deposit(300));





// isko private bnana do t k developer b directly glti sy access na kr sky

function createBankAccount(){
    
    let balance = 50;
    
    let user = {
        deposit: function(amount){
            if(typeof amount=== "number" && amount > 0){
                balance += amount;
                return balance;
            }
        },
        withdraw: function(amount){
            if(typeof amount=== "number" && amount > 0 && balance >= amount){
                balance -= amount;
                return balance;
            }
        },
        getBalance: function(){
            return balance;
        }
    };
    return user;
}
let myAccount = createBankAccount();
console.log(myAccount.deposit(500));
console.log(myAccount.withdraw(200));
console.log(myAccount.withdraw());
console.log(myAccount.getBalance());


*/


//    THIRD  * HOF (Higher Order Functions) *
// A Higher Order Function is a function that either takes one or more
//  functions as arguments or returns a function as its result.
// 1 function k andar as a argument doosra function pass krna
// 2 function k andar se aik function return krna

// Example 1: Function as Argument

function double(){    // function to be passed as argument

    function execute(){    // higher order function
        console.log(" Hello g ");   // inner function logic
    }
    return execute;   // returning the inner function
}
let func = double();  // func now holds the inner function
func();               // calling the inner function