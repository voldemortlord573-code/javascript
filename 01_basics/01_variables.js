const accountId = 12345
let accountEmail = "mohal.v@google.com"
var accountPassword = "22421"
accountCity = "Bhopal"


/*
prefer not to use var as it has problems in block scope and functional scope
*/

accountEmail = "abcdd"
accountPassword = "22112211"
accountCity = "Indore"

console.table([accountId, accountEmail, accountPassword, accountCity]);