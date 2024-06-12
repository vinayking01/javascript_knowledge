const User = require("../models/user_model");


module.exports.profile = async function(req,res){
    const sessionId = req.cookies['user_id']; // taking cookie stored in client browser
    // console.log(sessionId)
    if(sessionId)
    {
        const userFound = await User.findById(sessionId);
        // console.log(userFound.name)
        if(userFound)
        {
            const name  = userFound.name;
            const email = userFound.email;
            return res.render('home_post',{
                title: 'User Profile',
                from : "user_page",
                name : name,
                email : email
            });
        }
        else {
            res.redirect('/user/sign-in');
        }
    }
    else {
        res.redirect('/user/sign-in');
    }
    
}

module.exports.sign_up = function(req,res)
{
    return res.render('user_sign_up',{
        title : "User signup page"
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

        if (!userFound) {  // User not found
            // console.log(req.body) 
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
module.exports.create_Session =async function(req,res)
{
    // steps to authenticate
    try{
    //1. find the user
    const userFound =  await User.findOne({ email: req.body.email });    

    //2. handle user 
    if (!userFound) {  // User not found
        return res.redirect('back'); // redirected to sign-in page
    } 
    else {  // User found
        if(req.body.password !=  userFound.password)
           {
            return res.redirect('back');  // password is wrong back to sign
           } 
    //3. Handle the cookie session
        res.cookie('user_id',userFound.id) ;      
        return res.redirect('/user/profile'); 
    }  
    }
    catch (err) {
        console.log("Error:", err);
        return res.status(500).send("Internal server error");
    }
}