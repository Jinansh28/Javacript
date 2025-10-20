const user = {
    username : "Jin",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log("Got User Details");
        console.log(`Username : ${this.username}`);
        console.log(this);
        
    }
}

// const promiseOne = new Promise()
// const date = new Date()

// console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);


//By default it return this
function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}

//Overwriting can be avoided using new
//Constructor is reference to the function
const userOne = new User("J",12,true);
const userTwo = new User("K",11,false)
console.log(userOne.constructor);
// console.log(userTwo);

