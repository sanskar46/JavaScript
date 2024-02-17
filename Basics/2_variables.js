const accountID = 12543
let accountEmail = "sanskar@gmail.com"
var accountPassword = "123456"
accountCity = "Pune"

//accountID = 2 // not allowed to change the const value

console.log(accountID);

accountEmail = "hcs2123@gmail.com"
accountPassword = "122332"
accountCity = "Banglore"
let accountState;

console.table([accountEmail,accountPassword,accountCity,accountState]) //print the variables in tabular format - console.table([])

/*
Note: prefer not to use "var"
      because of issue in block scope and functional scope
*/

//whenever we do not give value to our variable the JavaScript store "undefined"(Special type keyword) to it.