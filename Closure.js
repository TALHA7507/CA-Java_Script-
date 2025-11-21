      // lexical scope example 1
  // lexical scope mtlb aik function apny outer function k
  //  variables ko access kr skta hai
/*      

function parent(){
    let message = "Hello, World!";
    function child(){
        console.log(message);
    }
    child();
}
parent();


     // example 2

function papa(){
    let papa = " I am Papa ";
    function beta(){
        console.log(papa);
    }
    beta();
}
papa();



// example 3

function outer(){
    let a = " TALHA ";
    let b = " Riaz ";
    function inner(){
        console.log(a + b);
    }
    return inner();
}
let func = outer;
func();