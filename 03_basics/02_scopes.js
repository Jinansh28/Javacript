

let a= 300
//global

if(true){
    //local
    let a =10
    const b=20
    console.log(a);
    
} 
console.log(a)

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


//Nested scopes
function one(){
    const username = "jin"
    function two(){
        const websites = "youTube"
        console.log(username);
    }
    // console.log(websites);
    two();
}
one();

if(true){
    const username = "sam"
    if(username == "sam"){
        const websites =" YouTube"
        console.log(websites);
    }
    // console.log(websites);
    
}
// console.log(username);

//***********Interesting************/
console.log(addone(5));
function addone(num){
    return num+1
}


// Cannot access this type of declaration before defining
// addTwo(5)
const addTwo =function(num){
    return num+2
}
