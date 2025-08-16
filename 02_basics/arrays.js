const myArray = [0,342,4,2,1,"J",true]
console.log(myArray);
console.log(myArray[0]);

const myheroes = new Array(1,2,31,324,"Jsjfksfn")
console.log(myheroes);
console.log(myheroes.length);

myArray.push(7);
myArray.push(8);
console.log(myArray);
myArray.pop();
console.log(myArray);

myArray.unshift(0);
console.log(myArray);

myArray.shift();
console.log(myArray);

console.log(myArray.includes(8));
console.log(myArray.indexOf(9));

const newArray = myArray.join()
console.log(myArray);
console.log(newArray);
console.log(typeof newArray);

console.log("A",myArray);

const myn1 = myArray.slice(1,3)
console.log(myArray);
console.log(myn1);
console.log("B",myArray);

// Splice deletes element from original array and includes last range
const myn2 = myArray.splice(1,3)
console.log(myn2);
console.log("C",myArray);


