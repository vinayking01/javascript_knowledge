var express = require('express')
var app = express()
var db = require('./db')

const BodyParser = require('body-parser') //it is middleware library for express.js,When a request is made to your Express application, body-parser intercepts the request before it reaches your route handlers. this we are using jisse hame khud se http request se data na nikalan pade.
app.use(BodyParser.json())  // it intercepts the data sent by client, if it is in jSON format then it will parse into javascript object and store it into req.body. for other type of data require other middleware req.link etc.


const Person = require('./Model/person');

// post route to add person

app.post('/person', async (req, res) => {   // converting this simple function into async so that we will wait till our data we get or till any error, for error handling we will be using the try and catch block
  try {
    const data = req.body // Assuming the re.body contains the person data

    const NewPerson = new Person(data);  // either we can pass the data directly int the object or we can use NewPerson.name  = data.name
    // NewPerson.name = data.name;
    // NewPerson.mobile = data.mobile;
    // NewPerson.Address = data.Address;

    // save the Newperson to the database
    const ReceivedResponse  = await NewPerson.save()
    console.log("Data Saved");
    res.status(200).json(ReceivedResponse) // sending status -200 with data in format of jSON data

  }
  catch (err) {
    console.log("Error");
    res.status(500).json(err, 'Internal Server Error');
  }
});

app.get('/person',async(req,res)=>{
  try{
    const getdata = await Person.find() ;  // Use the Mongoose model to fetch all persons from the database
    // When you execute const getdata = await Person.find();, you're using Mongoose's find() method to retrieve data from the Person collection in your MongoDB database. 
    //find() is a Mongoose query method used to find documents in the collection. When called without any conditions, it retrieves all documents in the collection.
    res.status(200).json(getdata);  // Send the list of persons as a JSON response
  }
  catch(err){
    console.log(err,"Failed to get the data");
    res.status(500).json(err,"Failed to get the data");
  }
})

// Parmaterized Endpoints
app.get('/person/:TypeOfWork', async (req,res)=>{   // ":variablename" :- in this way we create paramaterized endpoints which support different routes easily.
  try{
    const Typeofwork2 = req.params.TypeOfWork; // Extract the work type from the URL parameter, The params identify any parameter comes with request from client
    //validation check 
    if(Typeofwork2 == 'chef' || Typeofwork2 =='police' || Typeofwork2 == 'manager')
    {
      const SelectivePerson =  await Person.find({work : Typeofwork2}); // Send the list of persons with the specified work type as a JSON response
      res.status(200).json(SelectivePerson);
    }
  }
  catch(err){
    console.log(err,"Failed to get the data . Write the right link");
    res.status(500).json(err,"Failed to get the data. Write the right link");
  }
})



app.get('/', function (req, res) {
  res.send('hello world')
})


app.get('/login', (req, res) => {
  res.send(`${req.hostname} Your login page working`)
})




app.listen(3000) 
