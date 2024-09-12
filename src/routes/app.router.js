const express = require('express')
const router = express.Router()

const { HanleGet } = require('../controller/get.controller');
const { HandlePost } = require('../controller/post.controller');
const { HanleUpdateToGet ,HanleUpdate} = require('../controller/update.controller');
const { HandleDelete } = require('../controller/Delete.controller');

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
router.route('/del/:id').get(HandleDelete);


module.exports = router;