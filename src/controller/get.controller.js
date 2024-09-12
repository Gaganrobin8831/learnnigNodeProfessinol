const User = require('../models/user.model');

async function HanleGet(req,res) {
    try {
        // Retrieve all users
        const users = await User.find();

        // Render the 'users' view with the list of users
        res.render('show', { users });
    } catch (err) {
        console.error(err);
        res.status(500).render('error', {
            message: 'An error occurred while retrieving users',
            details: err.message
        });
    }
}

module.exports = {HanleGet}