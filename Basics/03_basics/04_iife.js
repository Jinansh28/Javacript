// Immediately Invoked Function Expressions


(function chai(){
    console.log(`DB connected`);
})();
// ; it is required to end the first IIFE
//named IIFE
( (name) => {
    console.log(`DB connected Two ${name}`);
})("hitesh");
//simple IIFE

//IIFE is a type of function only