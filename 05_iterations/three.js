//four.js



// for of

const arr =[1,2,3,4,5]
for (const i of arr) {
   console.log(i);
}

const greeting = "hello world"
for (const greet of greeting) {
    console.log(greet);
}

// Maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('FR',"France")
map.set('IN',"India")
console.log(map);

for (const [key,value] of map) {
    console.log(key,":",value);
}

const myObject ={
    'game1': 'NFS',
    'game2' :'spiderman'
}
//Objects is not iterable by for of loop
// for (const [key,value] of myObject) {
//     console.log(key,value);
// }
