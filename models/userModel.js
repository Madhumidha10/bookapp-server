const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            require: 'Name is required'
        }, 
        email: {
            type: String,
            require: 'Email is required',
            unique: true
        },
        password: { 
            type: String, 
            require: 'Password is required'
        }, 
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }
    }, 
    {
        timestamps: true
    }
);

const User = mongoose.model('users', userSchema);

module.exports = User;