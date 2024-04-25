

import mongoose from 'mongoose';

// Define the schema for the user model
const userSchema = new mongoose.Schema({
    name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

// Create and export the userModel based on the schema
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
