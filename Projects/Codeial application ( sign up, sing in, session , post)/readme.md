## Test Cases  - 
    1. http://localhost:3000/user/sign-in
    2. http://localhost:3000/user/sign-up
    3. http://localhost:3000/user/profile
    4. http://localhost:3000/posts/create-post


# Important Topic learned

1. timestamp in schema 
    ```
    The timestamps: true option in Mongoose Schema is used to automatically add createdAt and updatedAt fields to documents that are saved to the database.
    ```
    ### syntax
    ```
    const UserSchema = new mongoose.Schema({
    // Schema fields
    }, {
    timestamps: true,
    collection: 'customCollectionName' // Specify your custom collection name here
    });
    ```

2. Controllers VS Route
    
    (A) Route : Act as a map that directs incoming requests to the appropriate controller functions based on the request's URL and HTTP method.

    ### Syntax
    ```
    const express = require('express');
    const router = express.Router();
    const UserController = require('../controllers/UserController');

    router.get('/users/:id', UserController.getUserById); // beacuse these are function which we are accessing inside the controllers has the login contained.
    router.post('/users', UserController.createUser);

    module.exports = router;
    ```

    (B) Controllers: They contain the logic that processes incoming requests, interacts with the database, and prepares data to send back as a response. 
    ### Syntax
    ```
    / UserController.js

    const User = require('../models/User');

    exports.getUserById = async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    };

    ```


3.  Cookie parser Middleware - Definition: Small pieces of data stored on the client-side (browser).Stored in the browser and sent to the server with each request.Typically limited to 4KB per cookie.

    (A) import this after installation
    ```
        const cookieParser = require('cookie-parser');
        app.use(cookieParser());
        
    ```
    (b) Storing in the chrome cookie under Application
    ```
        res.cookie('Userid',data);
    ```
    (c) Accessing the Cookie
    ```
        req.cookies('Userid)

    ```
    (D) Deleting Cookies: 
    ```
        Use res.clearCookie(name) to delete cookies.
    ```
    
    
    