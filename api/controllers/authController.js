const hash = require('../helpers/hash');
const User = require('../models/user')

module.exports = class AuthController {
	constructor() {

	}

	login = (req, res) => {
		const { user, password } = req.body;
		try {
			if (!User.exists(user)) {
				res.status(401).json({ status: 'error', msg: 'User does not exist' });
				return;
			}

			const users = User.getUsers();
			if (users[user].password !== hash(password)) {
				res.status(401).json({ status: 'error', msg: 'Wrong password' });
				return;
			}

			console.log(`login del usuario: ${user}`);
			res.status(200).json({ status: 'ok', msg: 'Successfully logged in' })
		}
		catch (err) {
			console.log(err);
			res.status(500).json({ msg: 'Internal server error' })
		}

	}

	logout = (req, res) => {
		const { user, password } = req.body;
		console.log(`logout del usuario: ${user}`);
		res.json({ msg: 'logout exitoso' })
	}
}