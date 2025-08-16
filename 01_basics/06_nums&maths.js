const score = new Number(400)
console.log(score);

const balance = 400
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-US'));
console.log(hundreds.toLocaleString());


//****************Maths****************         

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(3,2,32,13));

console.log((Math.floor(Math.random()*6)+1))

const min =10
const max =20

console.log(Math.floor(Math.random()*(max-min+1)+min))
