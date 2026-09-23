const accountId = 144553
let accountEmail = "manish@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountstate;


// accountId = 2 not allowed
accountEmail = "hdfd@b.com"
accountPassword ="987757"
accountCity = "mumbai"

console.log(accountId);
/*
Prefer not to use var because of issue in block scope and functional scope. 
*/
console.table([accountId, accountEmail, accountCity, accountPassword, accountstate])