// 1. Password.js is middleware which is used for authentication purpose. along with this we have to Using this we can integrate different authentication strategies like local authentication using usernames and passwords, OAuth, OpenID, and more strategies. All these strategies are available in package form which is required the same installation process.

// 2 step - Chg in the schema , add the password and username field in the so that whenever some make req, we extract from the re.body and authentication process start.

var express = require('express')
// var Person =  require('./Routes/PersonRoutes.js')
const Person = require('./Model/person');
var app = express()
var db = require('./db')
const bcryptjs = require('bcryptjs')
require('dotenv').config(); // .env file added for keeping you API password security

const Port = 8000;
const BodyParser = require('body-parser')
app.use(BodyParser.json())

var f = "Vinay SIngh"


//1. Include the Import Package
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//2. 

/*
3. The new LocalStrategy() function from the passport-local package is used to create a new instance of the local authentication strategy for Passport.js. The three arguments (username, password, done) are parameters passed to the callback function that defines how Passport will authenticate the user using the local strategy.
done()- This is a callback function that you call once you have completed your authentication logic. It is used to pass control back to Passport, indicating whether authentication was successful or not.

Ex- Done used from one of these ways.
done(null, user): Called when authentication is successful. The user object is attached to the req object as req.user.
done(null, false): Called when authentication fails (e.g., wrong username or password).
done(null, false, { message: 'Error message' }): Called when authentication fails, with an optional message that can be displayed to the user.
done(err): Called when an error occurs during authentication. The err object is passed to Passport.
*/

//4. app.use(passport.initialize()); - do the initialisation so that it starts initializing.

//5. Choose which route you want to authenticate -  
const ComparePassword = async function (CandidatePassword, StoredPassword) {
  const isMatch = await bcryptjs.compare(CandidatePassword, StoredPassword);  // the compare function is provided by bcrypt.js and it takes two argument ( user password, hashedpassword ); it process the hashed password extract the salt from it and then combine it with user password, provide new hash and then match it with hash present in database.  
  return isMatch;
};

// eg- query you can request from server for checking - http://localhost:8000/Person/User/?username=ssss&password=zxcv@123

passport.use(new LocalStrategy(async (USERNAME, PASSWORD, done) => {
  // authentication logic here
  try {
    console.log('Received Credentials', USERNAME, PASSWORD);
    const user = await Person.findOne({ username: USERNAME }); // get back the person if available of this particular username
    // console.log(user);
    if (!user) {
      return done(null, false, { message: 'Incorrect Username Or User not Found' });
    }
    const isPasswordMatch = await ComparePassword(PASSWORD, user.password);
    console.log(user.password, PASSWORD, isPasswordMatch);
    if (isPasswordMatch) {
      return done(null, user) // for true
    }
    else {
      return done(null, false, { message: 'Password not matched' })
    }
  } catch (err) {
    return done(err);
  }
}))

app.use(passport.initialize());

app.get('/login', (req, res) => {
  console.log(req.headers);
  res.json(f)
})

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/Person/User/', passport.authenticate('local', { session: false }), async (req, res) => {
  try {
    const getdata = await Person.find({ username: req.query.username });
    res.send(getdata)
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).json({ error: 'Failed to get the data. Write the right link' }); // Send a response with status code 500 and JSON error message
  }

})

app.get('/Person', async (req, res) => {
  try {
    const getdata = await Person.find();
    res.send(getdata)
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).json({ error: 'Failed to get the data. Write the right link' }); // Send a response with status code 500 and JSON error message
  }

})


app.post('/', async (req, res) => {   // converting this simple function into async so that we will wait till our data we get or till any error, for error handling we will be using the try and catch block
  try {
    const data = req.body; // Assuming req.body contains the person data

    const newPerson = new Person(data);

    // Save the new person to the database
    const receivedResponse = await newPerson.save();
    console.log("Data Saved");
    res.status(200).json(receivedResponse); // Sending status 200 with data in JSON format

} catch (err) {
    console.log("Error", err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message }); // Send a response with status code 500 and JSON error message
}
});


app.get('/Person/:TypeOfWork', async (req, res) => {   // ":variablename" :- in this way we create paramaterized endpoints which support different routes easily.
  try {
    const Typeofwork2 = req.params.TypeOfWork; // Extract the work type from the URL parameter
    // Validation check 
    if (Typeofwork2 == 'chef' || Typeofwork2 == 'police' || Typeofwork2 == 'manager') {
      const SelectivePerson = await Person.find({ work: Typeofwork2 }); // Send the list of persons with the specified work type as a JSON response
      res.status(200).json(SelectivePerson); // Send a successful response with status code 200 and JSON data
    } else {
      res.status(400).json({ error: 'Invalid work type' }); // Send a response with status code 400 and JSON key object error message
    }
  } catch (err) {
    console.log(err, "Failed to get the data. Write the right link");
    res.status(500).json({ error: 'Failed to get the data. Write the right link' }); // Send a response with status code 500 and JSON key object error message
  }

})


app.listen(Port) 
