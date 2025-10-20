const name = "Jinansh"
const repoCount = 50
// console.log(name + repoCount +"Value");

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('jinansh-j')

console.log(gameName[0]);
console.log(gameName.__proto__)


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

//substring cannot take negative values
const newString = gameName.substring(0,4)
console.log(newString);

//It can take negative values
const anotherString = gameName.slice(-4,-1)
console.log(anotherString);

const newStringOne ="   krrish   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://jinansh.com/jinansh %20jain"
console.log(url);
console.log(url.replace('%20','-'));

console.log(url.includes('jina'));
console.log(url.split(' '));





