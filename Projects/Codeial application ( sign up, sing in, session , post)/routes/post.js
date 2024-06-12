const express = require('express')

const router = express.Router();

const postController  = require('../controllers/post_controller')

router.get('/create-post',postController.create);

router.post('/submitted',postController.created);

module.exports = router ;