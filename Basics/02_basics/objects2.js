// const tinderuser = new Object()
const tinderuser = {}
tinderuser.id ="123"
tinderuser.name ="Sam"
tinderuser.isLoggedIn =false
console.log(tinderuser);


const regularuser ={
    email :"jin@email.com",
    fullname : {
        userfullname : {
            firstname :"Jinansh",
            lastname :"Jain"
        }
    }
}

// Nested objects can be defined
console.log(regularuser.fullname.userfullname.firstname);
console.log(regularuser.fullname);

const obj1 ={1: "a",2: "b"}
const obj2 ={3: "c",4: "d"}
const obj5 ={5: "e",6: "f"}

// Treat objects as elements
const obj3 ={obj1,obj2}
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2,obj5)
console.log(obj4);

const obj6 = {...obj1, ...obj2}
console.log(obj6);

const users = [
    {
       id : 1,
       name :"a" 
    },
    {
        id : 2,
        name :"b"
    }

]
console.log(users[1].name);
console.log(tinderuser);

// Return keys in a form of array
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('IsLoggedIn'));


const course = {
    coursename : "Js in hindi",
    price : 999,
    courseInstructor : "Hitesh"
}

console.log(course.courseInstructor);
// Typedef kind of thing (De-structure)
const {Instructor} = course
console.log(Instructor);
 


// Json is a type of object that return required data from backend
// {
//     "name" : "Jin",
//     "coursename" : "js in hindi",
//     "price" : "100"
// }

[
    {},
    {},
    {}
]
