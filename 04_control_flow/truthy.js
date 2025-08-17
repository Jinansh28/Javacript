const userEmail =[]

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user name");
}

// False values
// false, 0 , -0, Bigint 0n, null, undefined, NaN

// True values
// "0", 'false', "null",' ', [], {},function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//false == 0 && 0 == '' && '' == false


//Nullish Coalescing Operator(??): null,undefined
let val1;
val1 = 5??10
console.log(val1);

val1 = null??10
console.log(val1);

val1 = undefined??null
console.log(val1);

val1 = null??undefined
console.log(val1);

// ?: ternary operator
(10>5)?console.log("true"):console.log("false");

