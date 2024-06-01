const mongoose = require('mongoose')
const bcryptjs = require('bcrypt')


const CandidateSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    party:{
        type: String,
        required : true,
    },
    age:{
        type: Number,
        require : true,
    },
    votes : [ // concept of mongo object we used here for store the array of object
        {
            user: {
                // details of person who voted with their unique id.
                type: mongoose.Schema.Types.ObjectId,
                ref : 'User',
                required : true,
            },
            votedAt:{
                type: Date,
                default: Date.now(),
            }
        }  
    ],
    VoteCount :{
        type: Number,
        default: 0,
    }
}, { collection: 'CandidateCollection' });

const Candidate = mongoose.model('candidate_model',CandidateSchema);

module.exports = Candidate;