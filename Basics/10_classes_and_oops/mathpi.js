const descripter = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(Math.PI);
Math.pi = 5;
console.log(Math.PI);
console.log(descripter);


const chai = {
    name: 'ginger',
    price : 250,
    isavailable : true,

    orderChai : function(){
        console.log("Chai nahi bani");
        
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    writable: true,
    enumerable : false,
    configurable : true
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== "function")
    console.log(`${key} : ${value}`); 
}

