const myObject1={
    js:'javascript',
    cpp:'C++',
    rb:'Ruby',
    swift:'swift by Apple'
}
for (const key in myObject1) {
    console.log(`${key}: ${myObject1[key]}`);
    
}
//For of loop returns values 
//For in loop returns key

const arr =[1,2,3,4,5]

for (const a in arr) {
    console.log(arr[a]);
}

//Maps cannot be iterable by forin loop
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('FR',"France")
map.set('IN',"India")

for (const [key,value] in map) {
    console.log(key,value); 
}
