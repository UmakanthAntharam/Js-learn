const accountId =  12345
let accountEmail =  "umakanth@gmail.com"
var accountPassword = "123456"
accountCity = "hyderabad"
let accountstate;


// accountId = 2 // not allowed

accountEmail = "uk@uk.com"
accountPassword = "321"
accountCity = "kolkata"

console.log("accountId");

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountstate])
