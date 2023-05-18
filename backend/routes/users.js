const router = require('express').Router();
let User = require('../models/user.model');

// deny access
router.route('/').post((req, res) => {
	res.json('Access denied.');
});

router.route('/login').get((req, res) => {
	User.find()
		.then(users => res.json(users))
		.then(err => res.status(400).json('Error! ' + err));
});

router.route('/register').post((req, res) => {
	const firstname = req.body.firstname;
	const lastname = req.body.lastname;
	const email = req.body.email;
	const password = req.body.password;

	const newUser = new User({firstname, lastname, email, password});

	newUser.save()
		// success
		.then(() => res.status(200).json('User has been registered!'))
		// fail
		.catch(err => res.status(400).json('Error in registration.' + err));
});

// export the router
module.exports = router;
