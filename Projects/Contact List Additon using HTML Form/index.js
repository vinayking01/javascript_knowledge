const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.set('view engine','ejs')
app.set('views' , path.resolve("./views"))

app.use(express.urlencoded());

app.get('/home',(req, res)=>{
    res.send ("Your are on home Page") 
     
 }) 

 //middleware 1
// app.use(function(req,res,next){
// console.log("Contact List Updated");
// console.log(req.body)
// next();
// })

const data  = [
 {
    name : "vinay Singh",
    age: 22
 },
 {
    name : "Abhsiehk",
    age : 21
 },
 {
    name : "Ritik",
    age  : 32
 }
];


app.get('/contact',(req, res)=>{
    res.render('Home',{data: data}); 
})

app.post('/contact-list',(req,res)=>{
    console.log(req.body)  
    data.push(req.body);
    res.redirect('/contact')
})

app.get('/',(req,res)=>{
    console.log("bye")
    res.send("Bye")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})