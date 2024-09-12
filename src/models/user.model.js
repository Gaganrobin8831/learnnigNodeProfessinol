const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        unique: [true, 'Username alerady Exit'],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: [true, 'Email alerady Exit'],
        lowercase: true
    }
}, { timestamps: true });


const User = new mongoose.model('User',userSchema)

module.exports = User