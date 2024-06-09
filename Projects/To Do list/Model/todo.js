const mongoose = require('mongoose');

// Define the Person tod do list  schema
const user_listSchema = new mongoose.Schema({
    
    date: {
        type:String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        enum: ['Personal', 'School', 'Cleaning' , 'Work', 'Others']
    }
    ,
    time: {
        type: Date,
        default: Date.now
    }
},{ collection: 'ToDoCollection' });


const Todolist = mongoose.model('User_todoData', user_listSchema );
module.exports = Todolist;