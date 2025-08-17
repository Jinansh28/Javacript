const user={
    username : "Raj",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);   
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

// Empty in node js and window in browser
console.log(this);


// This is not used in functions any declaration
const chai = ()=>{
    let username = "Jai"
    console.log(this);
    console.log(this.username);
    
}
chai()

const chia = function(){
    let username ="hitesh"
    console.log(this.username);
    
}
chia()

//Implicit 
//for {} brackets return statement is must
// for () no return statement is required
const myFunc = (num1, num2) =>(num1+num2)
console.log(myFunc(3,2));


// For returning objects we have to use curly brackets
const myF = () =>({username : "hitesh"})
console.log(myF);


