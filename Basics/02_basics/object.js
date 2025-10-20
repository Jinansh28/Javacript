// Singleton : constructor declared
// Object.create


// Object literals

const mySym = Symbol("key1")

const Jsuser = {
    name : "Jin",
    "fullname" :" Jinansh",
    [mySym] : "mykey1",
    age: 18,
    location : "kota",
    email : "abc@gmail.com",
    isLoggesIn : false,
    lastLoginDays :["Monday","Saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
// String defined attribute can only be defined by square brackets
console.log(Jsuser["fullname"]);
// define symbol in square brackets
console.log(Jsuser[mySym]);
console.log(typeof(Jsuser[mySym]));

Jsuser["email"] = "xyz@gmail.com"
console.log(Jsuser);

// Freezes the object no further changes can be done
// Object.freeze(Jsuser)
// Jsuser["name"] ="Jinanshadjk"
// console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello Js user");
}

Jsuser.greeting2 = function(){
    console.log(`Hello Js user , ${this.name}`);
}

// without curly brackets after function call resluts to function anonymous call
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());

