

import mongoose from 'mongoose';

// Define the schema for the user model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create and export the userModel based on the schema
const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
