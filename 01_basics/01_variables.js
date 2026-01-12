const accountId=454535
let accountEmail="neha@google.com"
var accountPassword="12345"
accountCity="Jaipur"
// accountId=1234  its not allowed to change because it const variable
console.log(accountId);
accountEmail="kusum@gmail.com"
accountPassword="54321"
accountCity="Mumbai"
accountState="Rajasthan"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*Prefer not to use var because of issue in block scope and functional scope */

