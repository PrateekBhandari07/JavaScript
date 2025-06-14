const  ACCOUNT_ID=121242;
let accountEmail="prateek@gmail.com"
var accountPassword="1224";     // dont use becuase the isssue of redeclaration,scoping and hoisting
accountCity="Honnavar"          // not safe dont use
console.log(ACCOUNT_ID,accountEmail,accountPassword,accountCity);

// ACCOUNT_ID=2324;
accountEmail="prajwal@gmail.com"
accountPassword="4343"
accountCity="bengaluru"
console.table([ACCOUNT_ID,accountEmail,accountPassword,accountCity])

let a=5;
if(a<5){
    var b="hello"
}
console.log(b);


// Accessed before declaration
console.log(d)
var d=9;
console.log(d)


// Function scope of var
function print(){
    console.log(d);
    
    var p="sldkj";
    console.log(p);
    var p="dsfds"
    console.log(p);
    
}
print()

// 🆚 var vs let – Key Differences
//Feature 	               var	                                      let 
//Scope	             Function-scoped 	                       Block-scoped
//Redeclaration     	Allowed	                                 Not allowed in the same block
//Hoisting	      Hoisted (initialized as undefined)  	Hoisted (but not initialized – causes error if accessed before declaration)
//Global Object 	Becomes a property of the global    Does not become a global object property
//                  object (window.varName)