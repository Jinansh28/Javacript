// if
const isUserloggedIn = true;
const temperature = 51
if(isUserloggedIn){

}

// <,>,>=,<=,!=
// ===

if(2 == "2"){
    console.log("executed");
}
if(2 === "2"){
    console.log("executed");
}
if(temperature < 50){
    console.log("less than 50");
}
else{
    console.log("greater than 50");
}

const score =200
if(score> 100){
    const power ="fly"
    console.log(`User power :${power}`);
}

if(score >199) console.log("test"),console.log("test2")
// Bad readability

const userLoggedIn = true
const debitcard = true

if(userLoggedIn && debitcard){
    console.log("Allowed to buy");
}
// && || 