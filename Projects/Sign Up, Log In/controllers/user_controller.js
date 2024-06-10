const User = require("../models/user_model");


module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: 'User Profile'
    });
}

module.exports.sign_up = function(req,res)
{
    return res.render('user_sign_up',{
        title : "User sing  up page"
    })
}

module.exports.sign_in = function ( req,res)
{
    return res.render('user_sign_in',
    {
        title : "User Sign in page"
    })
}

//sign up logic for the user.
module.exports.create = async function (req,res)
{
    if(req.body.password !=  req.body.confirm_password)
    {
        return res.redirect('back'); // go back again to sign up page
    }
    try {
        const userFound = await User.findOne({ email: req.body.email });

        if (!userFound) { 
            console.log(req.body)// User not found
            const newUser = await User.create(req.body);
            return res.redirect('/user/sign-in'); // User added and redirected to sign-in page
        } else {
            return res.redirect('/user/sign-in'); // User already present
        }
    } catch (err) {
        console.log("Error:", err);
        return res.status(500).send("Internal server error");
    }
};

// Sign in logic for the user and creating cookie session 
module.exports.create_Session = function(req,res)
{
    
}