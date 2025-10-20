const marvelheroes = ["thor","ironman","hulk"]
const dc = ["superman","batman","flash"]
// marvelheroes.push(dc)
// console.log(marvelheroes);
// array took array as an element
//use concat instead

const allheroes = marvelheroes.concat(dc)
console.log(allheroes);

const all_new_heroes = [... marvelheroes,... dc]
console.log(all_new_heroes);


//flat can remove subarrays
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realarray = anotherArray.flat(Infinity)
console.log(realarray);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

//Interesting
console.log(Array.from({name:'hitesh'}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
