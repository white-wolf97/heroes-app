const DatabaseError = require("../exceptions/databaseError");
const path = require('path');
const fs = require('fs');
const hash = require('../helpers/hash');

module.exports = class User {
	constructor() { }

	static getUsers() {
		try {
			const pathlist = path.join(__dirname, '..', 'database', 'users.txt');
			const usersBeforeParsing = fs.readFileSync(pathlist, 'utf8')
			if (usersBeforeParsing)
				return JSON.parse(usersBeforeParsing);
			else
				return {};
		}
		catch (err) {
			throw new DatabaseError('Problem accessing the database: ' + err);
		}
	}

	static saveToDB(users) {
		try {
			fs.writeFileSync(path.join(__dirname, '..', 'database', 'users.txt'), JSON.stringify(users), 'utf8');
		}
		catch (err) {
			throw new DatabaseError('Problem accessing the database: ' + err);
		}
	}

	static exists(username) {
		try {
			const users = User.getUsers();
			return users.hasOwnProperty(username);
		}
		catch (err) {
			throw new DatabaseError('Problem accessing the database: ' + err);
		}
	}

	static add(firstName, lastName, username, password) {
		try {
			const users = User.getUsers();
			users[username] = { firstName: firstName, lastName: lastName, password: hash(password) };
			User.saveToDB(users);
		}
		catch (err) {
			throw new DatabaseError('Problem accessing the database: ' + err);
		}
	}


}