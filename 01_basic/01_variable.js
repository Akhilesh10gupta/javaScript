const accountId = 144553
let accountEmail = "akhilesh123@gmail.oom"
var accountPassword = "12345"
accountCity = "gorakhpur"
let accountState;

// accountId = 2 //not allowed
accountEmail = "golu123@gamil.com"
accountPassword = "54321"
accountCity = "Paniyara"

/*
Prefer not to use var
because of issue in block and function scope
*/

console.log(accountId); 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])