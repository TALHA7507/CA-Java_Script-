/*

//  function are reusable block of code
//  function are executed when they are invoked or called.

function greeting(){          //   function  +  function_name
    console.log( ` Hello how are you. My name is Talha.`);            // jo hmy output chye wo console ma aye ga 
 }
greeting();         //  is k bgair function call ni ho ga


//   the sum of 2 values using function

function number(num, num1){
    let sum = num + num1;
    console.log(sum);
}
number(4,5);

//   ab hmny 1 dfa function bna liya ha ab koi or value ko add krny k liye phr sy new function bnany ki zaroorat ni ha bs isi function ko or values dty jao 
// ye unka b sum krta jye ga  or values esy dni  ** function_name(  or is ma values do jnka sum krwna );   like   number( 2, 3) ANSWER IS = 5.

number(4, 6);
number( 1,2);
number(10, 15);



function greeting(){          //   function  +  function_name
    console.log( ` Hello how are you. My name is Talha.`);            // jo hmy output chye wo console ma aye ga 
    return 0;          // kuch b return chye to tb lkhy gy hm 
}
console.log(greeting());

// agr mjy 2 sy zayada values k sum lna jsy 3 ya 4 ya 5 ka to tb 

function number(num, num1,num2=0, num3=0){      // agr 2 values hui sum k liye to num2 or
    let sum = num + num1 + num2 + num3;       // num3 ko =0 kr dy gy jsy ( num2=0 + num3=0 ) 
    console.log(sum);
}
number(4,1,1);
number(4,1,5,1);
number(4,1);
number(1,1,1);



// agr bht zyda values k sum lna ho to phr hm ** rest operator ** k use kry gy
//  ** Rest Operator **    ---->      (...num) 
function number(...num){
    let sum = 0;
    for(let n of num){
        sum+=n;
    }
    console.log(sum);
}
number(1,2);
number(3, 5, 4, 7, 4);
number(1,2, 5, 8, 2, 7, 4, 9, 6, 0, 3, 7);
number(1, 2, 3, 3,);
number(1,2);


//   Difference between ** Spread and Reast Operator **

// * Spread Operator *  
//  ya to ye direct object ko b khool dta ha ya array ko b khool dta ha   like
let arr = [10, 20, 30, 40];
let arr2 = [50, 60, 70, 80];
let arr3 = [...arr, ...arr2];             // Spread Operator use
console.log(arr3);

// * Rest Operator *
// bht sri individuals values aa rhi ho or mjy catch krni ho to tb hm rest operator
//  lgaye gy jsy k
function number(...num){              // Rest Operator use
    let sum = 0;
    for(let n of num){
        sum+=n;
    }
    console.log(sum);
}
number(1,2);
number(3, 5, 4, 7, 4);
number(1,2, 5, 8, 2, 7, 4, 9, 6, 0, 3, 7);
number(1, 2, 3, 3,);
number(1,2);



//   function 2 treeky sy call krwa skty hn 
// 1. direct call krwa skty hn jsy k uper kia ha
// 2. or agr hmny function ko kisi variable ma store krwana ho to phr hm ese krty hn jsy k 

let number = function(num1, num2){
    return num1+ num2;
}
console.log(number(2, 3));


//  *** Arrow Function  ' => ' ***    very very very important 
let sum = (num1, num2) => {
    return num1 + num2;
}
console.log(sum(6, 7));


//   or agr mjy sirf return krwna ha to phr hm " {} " ko or  " return " ko b
//   hata skty hn.
 let sum = (num1, num2) => num1 + num2;
 console.log(sum(10, 15)); 


let squareroot = num => num * num;      // jb sirf 1 parameter ho to " () " ko b hata skty hn 
console.log(squareroot(6));


// jb koi object return krwana ho to phr hm ese krty hn
let person = ( ) => ( { name : 'Talha', age: 22 } );        // jb object return krwana ho to " () " k ander " {} " lgany hn  or iska b dhyan 
                                                            // rkhny ha k " {} " k ander hmny key or value likhni ha  or isky andr lkhny sy 
                                                            // khudi samaj jta k isko return krwna ha 
console.log(person());


//     IIFE       //  Immediately Invoked Function Expression

( function greeting (){                          // () () phly function bnany k liye or dosry () function call krwany k liye hoa ha
    console.log( ` Hello how are you. My name is Talha.`);
})();         //  is k bgair function call ni ho ga                  //( )     ye yha call krwany k liye ha  


// arrow function  b () () isky andr chlty hn 
(() =>{
    console.log( ` Hello my name is Talha.`);
})();

//                 callback function

// jb ek function k ander dosra function parameter k tor pr pass krty hn to usy callback function krty hn

function greeting (){
    console.log( ` Hello how are you. My name is Talha. `)
}

function meeting(callback){
    console.log(" Welcome to the meeting.");
    callback();
}
meeting(greeting);

*/


