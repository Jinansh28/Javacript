// Primitive

//7 types
/* string
   number
   null
   undefined
   boolean
   bigInt
   symbol*/

const score = 100 
const scoreValue = 100.3

const isLoggesIn = false
const outsidetemp = null
let userEmail;
const id = Symbol("123")
const anotherId = Symbol("123")
const bigNumber = 231143234223143827243n

console.log(id === anotherId);


// Reference(Non primitive)
/* arrays
   objects
   functions*/

const heroes =["shaktiman","doga","naagraj"]

let myObj = {
    name: "Jin",
    age: 18,
}

const myFunction = function(){
    console.log("hello");
}

console.log(typeof id);
