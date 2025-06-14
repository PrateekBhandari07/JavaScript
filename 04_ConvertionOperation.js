console.log("Checking the type");
let score=35;
console.log(typeof(score));
console.log(typeof score);

console.log("\nChecking the type Number");
let data="35"  //can be converted to Number
console.log(typeof data);
data=Number(data)
console.log("data type of data is : ",typeof data);

console.log("\nChecking the type Number and string");
let check="35sf" // cannot be converted to int (NaN)
check=Number(check)
console.log(typeof data);
console.log(check);

console.log("\n\nChecking the type null");
let temp=null
console.log(temp);
console.log(Number(temp)); // when null converted to Number it will become 0

console.log("\n\nChecking the type of boolean");
let isLoggedIn="r"; //other than 0 and "" Boolean will return true
let checkLoggedIN=Boolean(isLoggedIn)
console.log(checkLoggedIN);


console.log("\n\nConverting Number to string");
let someNumber=33;
let StringNumber=String(someNumber)
console.log(typeof StringNumber)


console.log("5"+3)

// ************************* operations ****************************

console.log("\nNegative Value");

let value=3
let negValue=-value
console.log(negValue);


// Maths operation
console.log("\nPower : 5**2");
console.log(5**2)

// String Concatination
console.log("\n\"1\"+\"1\" : ","1"+"1");
console.log("\"1\"+2 : ","1"+2);
console.log("2+\"1\" : ",2+"1");
console.log("\"1\"+2+2 : ","1"+2+2);
console.log("\n2+2+\"2\" : ",2+2+"2");


// JavaScript's Type Coercion (Automatic Conversion)
// When using the - operator, JavaScript converts both operands to numbers
console.log("7"-1);

console.log("7" + 1); // "71" ← String concatenation
console.log("7" - 1); // 6   ← Numeric subtraction


let mydata=102
console.log(mydata++); // postfix
console.log(++mydata); // prefix or preincrement
