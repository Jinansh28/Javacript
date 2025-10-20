const coding =["java","c++","python","ruby"]

// coding.forEach(function(c){
//     console.log(c);
// });

coding.forEach((code)=>{
    console.log(code);
})

function printme(val){
    console.log(val); 
}

// passing an function to execute each time in forEach loop
coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

const myCoding =[
    {
        languagename: "javascript",
        filename :"js"
    },
    {
        languagename: "C++",
        filename: "Cpp"
    },
    {
        languagename: "python",
        filename : "py"
    }
]

myCoding.forEach((obj)=>{
    console.log(obj.languagename,":",obj.filename);
})

// Objects in array cannot be accesed through forin loop
// for (const [key] in myCoding) {
//     console.log(key);
    
// }