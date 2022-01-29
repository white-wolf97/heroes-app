const DatabaseError = require('../exceptions/databaseError');
const path = require('path');
const fs = require('fs');


module.exports = class Database {
	constructor() {

	}

	static init() {
		const usersDBPath = path.join(__dirname, 'users.txt');
		if (!fs.existsSync(usersDBPath)) {
			fs.writeFile(usersDBPath, '', (err) => {
				if (err)
					throw new DatabaseError(err.message);
			})
		}
	}
}