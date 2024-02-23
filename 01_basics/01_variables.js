const accountID = 144553
let accountEmail = "ansh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// accountID = 2 // not allowed




accountEmail = "hc@hc.com"
accountPassword = "2112112"
accountCity = "Delhi"

console.log(accountID);

/*
prefer not to use var
because of issue in block scope and functional scope
 */

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])