// this will be the file for the connection of node js with mongoose.

const mongoose = require('mongoose');


//define the MongoDB connection URL

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Replace 'mongodb://localhost:27017/mydatabase' with your actual MongoDB URL you want to get create if it is not there

const db = mongoose.connection;


db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.on('connected', () => {
  console.log(' \n Your successfully Connected to MongoDB - Boy');
});

db.on('disconnected', () => {
    console.log(' \n Your successfully Connected to MongoDB - Boy');
  });

// Export the database connection

module.exports =  db;