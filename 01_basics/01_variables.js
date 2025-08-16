const accountId = 1444553
let accountEmail =  "xyz@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
// Can use without let 
let accountState;
// Without any value undefined

console.table([accountId,accountEmail,accountPassword,accountCity])


// accountId = 2 not allowed


accountEmail ="abc@gamil.com"
accountPassword="54321"
accountCity="Bengaluru"


// prints every variable at once
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* Only use let instead of var 
because of issue in block scope and functional scope*/

