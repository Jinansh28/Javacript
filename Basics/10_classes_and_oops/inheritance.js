class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.password = password
        this.email = email
    }

    addcourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@teacher.com","123")
chai.addcourse()

const Tea = new User("tea")
// Out of scope
// console.log(tea.addcourse());
Tea.logMe();

console.log(chai instanceof Teacher);
console.log(chai instanceof User);


