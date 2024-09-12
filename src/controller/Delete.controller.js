const User = require('../models/user.model');
const mongoose = require('mongoose')

async function HandleDelete(req, res) {
    console.log('Delete request received');
    console.log('Request params:', req.params);

    const id = req.params.id;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).render('error', {
            message: 'Invalid ID format',
            details: `The provided ID ${id} is not valid.`
        });
    }

    try {
        // Attempt to delete the user
        const deletedUser = await User.findByIdAndDelete(id);

        // Check if a user was deleted
        if (!deletedUser) {
            return res.status(404).render('error', {
                message: 'User not found',
                details: `No user found with ID ${id}.`
            });
        }

        console.log("Deleted:", deletedUser);

        // Redirect or send a success response
        res.redirect('/users'); // or use res.status(200).send({ message: 'User deleted successfully' });
    } catch (err) {
        console.error('Error during delete:', err);
        res.status(500).render('error', {
            message: 'An error occurred while deleting the user',
            details: err.message
        });
    }
}

module.exports = {HandleDelete}