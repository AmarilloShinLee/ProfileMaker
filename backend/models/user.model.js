// User Schema/Table. All of the user information is defined here

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
	
	// first name column
	firstname: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength: 3 
	},

	// last name column
	lastname: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength: 3 
	},

	// email address column
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 10
	},	

	// password column
	password: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength: 5
	}
});

// assign this model to the mongoose models
const User = mongoose.model('Users', userSchema);

// export this model
module.exports = User;
