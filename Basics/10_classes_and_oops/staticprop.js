class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Jin = new User("Jinansh")
//Static
// console.log(Jin.createId())

class teacher extends User{
    constructor(username,email){
        super(username)
        this.enail = email
    }
}

const Sparsh = new teacher ("Sparsh","S@mehta.com")
Sparsh.logMe()
// console.log(Sparsh.createId());

