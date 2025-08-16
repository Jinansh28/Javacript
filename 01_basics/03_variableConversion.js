let score = "a"
console.log(typeof score);
console.log(typeof(score));

let valueInnumber = Number(score);
console.log(typeof(valueInnumber));
console.log(valueInnumber);
// 33abc can also be converted but it will store NaN
// null is converted to 0
// undefined is converted to NaN
// boolean to 0 or 1
// pure string to NaN

let isLoggesIn = "A"
let booleanIsloggedin = Boolean(isLoggesIn)
console.log(typeof(booleanIsloggedin));
console.log(booleanIsloggedin)

// 1=> true , 0=> false
// ""=> false, "A"=>true

let n = 33
let stringn = String(n)
console.log(typeof(stringn));
console.log(stringn);

