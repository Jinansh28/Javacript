// Dates
let myDate = new Date()
console.log(myDate.toString());
console.log(typeof myDate);
console.log(myDate.toLocaleString());


// Month start from 0
let myCreatedDate = new Date(2025,8,16)
console.log(myCreatedDate.toDateString());


let myCreatedDate2 = new Date(2025,8,16,5,3)
console.log(myCreatedDate2);

let myCreatedDate3 = new Date("01-14-2024")
console.log(myCreatedDate3)

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate3.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: "IST"
})
console.log(newDate);
