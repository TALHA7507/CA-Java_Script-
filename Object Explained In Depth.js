/*
// CRUD Operations on Object in JavaScript
//CRUD stands for = Create, Read, Update, Delete

// Create
let obj = {
    name : " Talha Riaz ",
    age : 22,
    city : " Sheikhupura ",
    profession : " Student ",
};
//console.log(obj); //old way to display object

// best way to access object properties
console.log(`My name is ${obj.name}. My age is ${obj.age} years old. Currently I live in ${obj.city}. I am a ${obj.profession}.`);  // display object properties using template literals


//  Read 
console.log(obj.name); // access name property
console.log(obj.city); // access city property


// Updates to object properties
obj.name = " Muhammad Talha Raz "; // update name property
obj.age = 23; // update age property
obj.city = " Lahore "; // update city property
obj.profession = " Software Engineer "; // update profession property

// Add new property to object
obj.country = " Pakistan "; // add new property country

// display updated object properties using template literals
console.log(`My name is ${obj.name}. My age is ${obj.age} years old. Currently I live in ${obj.city}. I am a ${obj.profession}. I belong to ${obj.country}.`);


// Delete
delete obj.age;    // delete age property
console.log(obj);



let addr = {
    " Home Address " : " 123 Main St, Springfield ",
    " Work Address " : " 456 Elm St, Springfield ",
    " Postal Code " : " 78910 "
};
console.log(addr); // display the address object

// Read the ( Object ) Address properties
console.log(addr[" Home Address "]); // access Home Address property
console.log(addr[" Work Address "]); // access Work Address property
console.log(addr[" Postal Code "]); // access Postal Code property 

let addr2 = addr;
addr2[" Home Address "] = " 999 New St, Springfield ";   // update Home Address property           // addr2 b addr ko hi refer kr rha ha so changing addr  ma hi ho gy
console.log(addr2); // display updated address object

//  for keys in object                 // keys like index number in array     like name , age , city
console.log(Object.keys(addr)); // display all keys of addr object

// for values in object         // values like values in array     like " Talha Riaz " , 22 , " Sheikhupura "
console.log(Object.values(addr));   // display all values of addr object

// for entries in object          // entries like key and value pair in array
console.log(Object.entries(addr));   // display all entries of addr object

// for loop to iterate keys
for (let keys in addr) {
    console.log(keys);
}

// for loop keys and also values 

for(let keys in addr) {
    console.log(keys, addr[keys]);
}

  
let obj = {
    name : " Talha Riaz ",
    age : 22,
    city : " Sheikhupura ",
    profession : " Student ",
};

//   destructuring mean finding values from object 
let { name, age } = obj;  
console.log(name, age);

// same as array destructuring
let arr = [ 10, 20, 30, 40 ];
let [first, second] = arr;
console.log(first, second);

//  renaming variables while destructuring
let { name: userName, age: userAge } = obj;
console.log(userName, userAge);

// for loop in array like for in loop for object     // for keys 
let tempArr = Object.keys(obj); // convert object keys to array
for ( let key of tempArr ) {
    console.log(key);
}

// for loop in array (values) 
let tempArr = Object.values(obj); // convert object values to array
for ( let values of tempArr ) {
    console.log(values);
} 

// for loop in array ( entries )
    let tempArr = Object.entries(obj);  // convert object entries to array
for ( let entries of tempArr ) {
    console.log(entries); 
}



//    object k andr hm function b create kr skty hn      // function like paragraph string type ya random type
// function ko hm method b blty hn 

let obj = {
    name : " Talha Riaz ",
    age : 22,
    city : " Sheikhupura ",
    profession : " Student ",
    greeting : function(){
        console.log( ` Hello My name is ${obj.name}. i'm ${obj.age} years old. I live in ${obj.city}. `);
    }
}
obj.greeting();

// ${obj.name} is a old method now we use modern method * this * keyword like 
// ${this.name} this is a new latest and best method. 
// * this * directly object k name ko approach krta ha.  So


let obj = {
    name : " Talha Riaz ",
    age : 22,
    city : " Sheikhupura ",
    profession : " Student ",
    greeting : function(){
        console.log( ` Hello My name is ${this.name}. i'm ${this.age} years old. I live in ${this.city}. `);
    }
}
obj.greeting(); 

//  object k andr object bnana mtlb k nested object bnana
let obj = {
    name : " Talha Riaz ",
    age : 22,
    city : " Sheikhupura ",
    profession : " Student ",
    city : {
        city : " Sheikhupura ",
        area: " Habib Colony ",
        near: " Qila ",
    }
}
console.log(obj.city.area);

//  age hmry pass 2 class object hn or hm chahty k 1 ma changing kry to dsry
//  ma na ho to hm phr * Spread * operator k use kry gy is sy dono ko hm 
//  alag alag rkhwa skty hn  mtlb obj1 k name whi show ho ga jo obj1 ma ho 
//   ga or obj2 ma wo show ho ga jo hm obj2 ma dy gy

let obj = {
    name : " Talha Riaz ",
    age : 22,
    city : " Sheikhupura ",
    profession : " Student ",
}

let obj2 = {...obj};   // * Spread * Operator or ye yha py one level wlo ko 
obj2.name = " Ptwari "; // ^ hi handle kry ga **nested** wlo ko ni kry ga.

console.log(obj);
console.log(obj2);



// agr hm **nested** object class wly ma ksi entries ko change krna chahty 
// to phr hm 

let obj = {   
    name : " Talha Riaz ",
    age : 22,
    city : " Sheikhupura ",
    profession : " Student ",
    city : {             // nested object class create hui ha
        area : " Habib Colony ",
        near : " Qila ", 
    }
};
// for object 1 && 2 
let obj2 = structuredClone(obj);
obj2.city.area = " Batti Chowk ";
obj2.city.near = " bbbbb ";
console.log(obj);


//   Pointer  
// three types of Pointer
// 1. Map Pointer             jaga k bta dy ga k yha ho gy khi 
// 2. Property Pointer        exact jaga k bta dy ga k yha ha 
// 3. Element Pointer         us jaga k area or capacity 1 trha sy ha k is ma capacity itni or array type hi ha 

*/