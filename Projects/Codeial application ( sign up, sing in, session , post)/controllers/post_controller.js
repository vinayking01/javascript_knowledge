const Post = require('../models/post_model')
const User = require('../models/user_model')




module.exports.create = async function(req,res)
{   const sessionId = req.cookies['user_id'];
    const userFound = await User.findById(sessionId);
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

module.exports.created = async function(req,res)
{
    console.log("Hit")
    const sessionId = req.cookies['user_id'];
    const userFound = await User.findById(sessionId);

    if(sessionId)
        {
            try {
                if (userFound) {
                    const newPost = await Post.create({
                        content: req.body.content,
                        user: sessionId // Ensure user ID is correctly set
                    });
                    
                    const all_post  = await Post.find({user: sessionId}) ;

                    console.log("Data Saved", all_post);
                    return res.render('user_profile',{
                        form : "post_page",
                        name : userFound.name,
                        email : userFound.email,
                        post :  all_post
                    });
                    // return res.redirect('/user/profile');
                } else {
                    return res.redirect('/user/sign-in');
                }
            } catch (err) {
                console.log('Error in creating a post:', err);
                return res.redirect('back');
            }
        } else {
            return res.redirect('/user/sign-in');
        }
}