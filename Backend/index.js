require('dotenv').config()

console.log("Chai aur code");
const express  = require('express')
const app = express()
let PORT = 3000

app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.get('/twitter',(req,res)=>{
    res.send('Jinanshdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1> Please login</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur Code</h2>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`);
})