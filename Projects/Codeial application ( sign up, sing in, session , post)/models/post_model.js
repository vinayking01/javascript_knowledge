const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    content :{
        type: String,
        require : true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,   // id relation with other schema
        ref : 'user_module'    // ref field specifies the model to which the ObjectId refers.
    }


},{
    timestamps : true,
    collection :'Post Data (User sign up/ sign in)'
});

const Post  = mongoose.model('Post',postSchema);

module.exports = Post;