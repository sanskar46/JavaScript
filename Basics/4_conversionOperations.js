let score = "99abc";
console.log(typeof score); // It is string

let valueInNUmber = Number(score); // score will now convert in number
console.log(typeof valueInNUmber); // now it is number - but how it is number the string have 99abc?

console.log(valueInNUmber); //NaN - not a number

// If we search for null it will give 0
// If we search for undefined it will give NaN
// If we give Boolean value if the value is true it will give 1 and for false it will give 0


// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn); 
console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// "" => false
// "Sanskar" => true

let num = 33
let stringNum = String(num) // convert the number into string
console.log(stringNum);
console.log(typeof stringNum);

// ********************** Operations **********************

let value = 3
let negValue = -value
console.log(negValue); // -3

//*************** Basic Maths Operations ***************
/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); // Power
console.log(2/2);
console.log(2%2);
*/

console.log("1" + 2);       // 12
console.log(1 + "2");       // 12
console.log("1" + 2 + 2);   // 122
console.log(1 + 2 + "2");   // 32

let counter = 100;
//counter++; // 101
++counter;   // 101 
console.log(counter);