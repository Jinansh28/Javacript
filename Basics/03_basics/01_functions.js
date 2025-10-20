function sayMyName(){
    console.log("j");
    console.log("i");
    console.log("n");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
}

sayMyName()

function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}
const result = addTwoNumbers(3,5)
//return statement
console.log(result);

function addTwoNumbers1(number1,number2){
    console.log(number1+number2);
    return number1+number2
}
const resul = addTwoNumbers1(3,5)
console.log(resul);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// ... spread and rest function used to recieve all the parameters
console.log(calculateCartPrice(200,400,300,true,"j"));

const user={
    username :"hitesh",
    price :500
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)
handleObject({
    username :"sam",
    price: 2031
})

const mynewArray =[1,323,321,21,21]
function getarray(array){
    return array[0]
}
console.log(getarray(mynewArray));
