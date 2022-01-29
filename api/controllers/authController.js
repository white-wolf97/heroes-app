module.exports = class AuthController {
	constructor() {

	}

	login = (req, res) => {
		const { user, password } = req.body;
		console.log(`login del usuario: ${user} con el password ${password}`);
		res.json({ msg: 'login exitoso' })
	}

	logout = (req, res) => {
		const { user, password } = req.body;
		console.log(`logout del usuario: ${user}`);
		res.json({ msg: 'logout exitoso' })
	}
}