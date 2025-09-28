//ES6

class user {
    constructor(username,email,password){
        this.username = username
        this.email = username
        this.password = password
    }

    encryptpassword(){
        return `${this.password}abc`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("Chai", "Abc@gmail.com","123")
console.log(chai.encryptpassword())
console.log(chai.changeusername());


//Behind the scene
function User(username,email,password){
    this.username = username
    this.email = username
    this.password = password
}

User.prototype.encryptpassword = function(){
    return `${this.password}abc`
}

User.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("Tea","xyz@abc,com","123")
console.log(tea.changeusername());
console.log(tea.encryptpassword());

