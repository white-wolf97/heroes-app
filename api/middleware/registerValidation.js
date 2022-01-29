const registerValidation = (req, res, next) => {
	try {

		const { firstName, lastName, username, password, password2 } = req.body;

		if (!firstName.trim()) {
			res.status(400).json({ status: 'error', msg: 'firstName cannot be empty' });
			return;
		}

		if (!lastName.trim()) {
			res.status(400).json({ status: 'error', msg: 'lastName cannot be empty' });
			return;
		}

		if (!username.trim()) {
			res.status(400).json({ status: 'error', msg: 'username cannot be empty' });
			return;
		}

		if (!password.trim()) {
			res.status(400).json({ status: 'error', msg: 'password cannot be empty' });
			return;
		}

		if (password !== password2) {
			res.status(400).json({ status: 'error', msg: 'Passwords must match' });
			return;
		}
		next();
	}
	catch (err) {
		console.log(err);
		res.status(500).json({ status: 'error', msg: 'Internal server error' })
	}
}

module.exports = registerValidation;