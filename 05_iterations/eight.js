const array1=[1,2,3]
// return gets stored in acc
const myTotal = array1.reduce(function (acc,curr){
    console.log(`${acc}+${curr}`);
    
    return acc+curr
},0)
console.log(myTotal);

const mytotal=array1.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//typeof array is passed as a parameter in reduce or any looping method
const total = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(total);