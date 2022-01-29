const User = require('../models/user')

module.exports = class UserController {
	constructor() { }

	register = (req, res) => {
		const { firstName, lastName, username, password } = req.body;
		try {
			if (User.exists(username)) {
				res.status(400).json({ status: 'error', msg: 'User already exists' })
				return;
			}
			User.add(firstName, lastName, username, password);
			res.status(201).json({ status: 'ok', msg: 'User added successfully' })
		}
		catch (err) {
			res.status(500).json({ status: 'error', msg: 'Internal server error' });
			console.log(err);
		}

	}
}