const User = require('../models/user.model');

async function HanleUpdateToGet(req,res) {
    try {
        // Retrieve all users
        const id = req.params.id;
        console.log(id);
        const users = await User.findById(id);
        console.log(users);
        
        // Render the 'users' view with the list of users
        res.render('update', { users });
    } catch (err) {
        console.error(err);
        res.status(500).render('error', {
            message: 'An error occurred while retrieving users',
            details: err.message
        });
    }

    
}

async function HanleUpdate(req, res) {
    console.log('Update request received');
    console.log('Request params:', req.params);
    console.log('Request body:', req.body);

    try {
        const id = req.params.id;
        const { username, email, password } = req.body;

        // Update user information
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { username, email, password },
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).render('error', {
                message: 'User not found',
                details: `User with ID ${id} does not exist.`
            })
        }

        // Redirect to the route that shows all users
        res.redirect('/users');
    } catch (err) {
        console.error(err);
        res.status(500).render('error', {
            message: 'An error occurred while updating the user',
            details: err.message
        });
    }
}

module.exports = {HanleUpdateToGet,HanleUpdate}