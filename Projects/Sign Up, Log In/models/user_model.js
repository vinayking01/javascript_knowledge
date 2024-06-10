const mongoose = require('mongoose');
const { type } = require('os');

const UserSchema = new mongoose.Schema({
    email : {
        type: String,
        required : true,
        unique : true,
    },
    password:{
        type: String,
        required : true,
    },
    name:{
        type: String,
        required : true,
    },
    
},{
    timestamps : true,
    collection: 'User Login/signup DB' 
});

const user  = mongoose.model('User',UserSchema);

module.exports = user;