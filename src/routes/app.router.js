const express = require('express')
const router = express.Router()
const User = require('../models/user.model');
const { HanleGet } = require('../controller/get.controller');
const { HandlePost } = require('../controller/post.controller');
const { HanleUpdateToGet ,HanleUpdate} = require('../controller/update.controller');

// Handle GET request
router.route('/').get((req,res)=>{
    res.render('user')
})

router.route('/create').post(HandlePost);

//Update data by id
router.route('/edit/:id').get( HanleUpdateToGet );
router.route('/update/:id').post( HanleUpdate );


// Route to display all users
router.route('/users').get(HanleGet);


module.exports = router;