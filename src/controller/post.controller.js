const User = require('../models/user.model');

async function HandlePost(req,res) {
    try {
        const { username, password, email } = req.body;

        // Create a new user
        const user = new User({ username, password, email });

        // Save the user to the database
        await user.save();

         // Redirect to the route that shows all users
         res.redirect('/users');
    } catch (err) {
        console.error(err);

        // Render error.ejs with the error message and details
        let errorMessage = 'An error occurred while creating the user';
        let errorDetails = '';

        if (err.name === 'ValidationError') {
            errorMessage = 'Validation Error';
            errorDetails = Object.values(err.errors).map(e => e.message).join(', ');
        } else if (err.code && err.code === 11000) {
             // Handle unique constraint errors
             errorMessage = 'Duplicate key error';
             errorDetails = `Duplicate value for fields: ${Object.keys(err.keyValue).join(', ')} - ${Object.values(err.keyValue).join(', ')}`;
        }  else {
            errorMessage = err.message;
        }

        res.status(500).render('error', {
            message: errorMessage,
            details: errorDetails || null
        });
    }
}

module.exports = {HandlePost}