var express = require('express')
var app = express()
var db = require('./db')
require('dotenv').config(); // .env file added for keeping you API password security

const  Port  = process.env.PORT || 8000;

const BodyParser = require('body-parser') //it is middleware library for express.js,When a request is made to your Express application, body-parser intercepts the request before it reaches your route handlers. this we are using jisse hame khud se http request se data na nikalan pade.
app.use(BodyParser.json())  // it intercepts the data sent by client, if it is in jSON format then it will parse into javascript object and store it into req.body. for other type of data require other middleware req.link etc.


app.get('/login', (req, res) => {
  res.send(`${req.hostname} Your login page working`)
})


const PersonRoutes = require('./Routes/PersonRoutes');
// Use the routers
app.use('/person', PersonRoutes);   //When a request comes in for '/person' or any of its subpaths, Express will execute the middleware or routing logic defined in PersonRoutes. This allows you to modularize your application's routing and handle different parts of the application separately based on the URL paths.


app.get('/', function (req, res) {   
  res.send('hello world')
})


app.listen(Port) 
