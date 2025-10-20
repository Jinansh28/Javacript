let myName = "Jinansh     "

// myName.prototype.

let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}

heroPower.hitesh()
myHeroes.hitesh()

Array.prototype.jin = function(){
    console.log("Jin is present");
}
myHeroes.jin()
// heroPower.jin()



//Inheritance

const user ={
    name : "Ca",
    email : "Ca@google.com"
}
const teacher = {
    makevideo : true
}
const teachingSupport = {
    isAvailable : false
}
const TAsupprot = {
    makeAssignment : "Js assignment",
    fulltime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = user
// console.log(teacher.email);


//Modern Syntax
Object.setPrototypeOf(teacher,TAsupprot)

String.prototype.truelength  = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`);
}

myName.truelength()
"hitesh".truelength()
"icetea".truelength()