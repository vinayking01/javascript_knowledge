const express = require('express')

const router = express.Router();

const user_controller = require('../controllers/user_controller');

router.get('/profile',user_controller.profile);

router.get('/sign-up',user_controller.sign_up);

router.get('/sign-in',user_controller.sign_in);

router.post('/create',user_controller.create); 

router.post('/create-session',user_controller.create_Session);


module.exports = router ;