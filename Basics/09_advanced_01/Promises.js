const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    // DB calls,cryptography,network
    setTimeout(function(){
        console.log("Aysnc task is complete");
        resolve()
    },1000)
}) 

promiseOne.then(function(){
    console.log("Promise is consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)

}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "xyz@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);  
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error) resolve({username : "JJ",password: "123"});
        else reject("ERROR : Something went wrong");
    },2000)
})


//Error
// const username = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// })
// console.log(username);


// Chaining
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);  
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})



// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({username : "javascript",password: "123"})
//         } else {
//             reject('ERROR : JS WENT WRONG')
//         }
//     },1000)
// });

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log('error');
//     }
// }

// consumePromiseFive() 

// async function getAllusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('Error');   
//     }
// }
// getAllusers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{ return response.json()})
.then((data)=>{console.log(data);})
.catch(()=>{console.log('Error')})