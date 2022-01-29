const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
	path: path.join(__dirname, '..', '.env')
});

const config = {
	passwordSalt: process.env.PASSWORD_SALT || 'b1313eca95ce2035f9b8a2ec2974d756',
	port: process.env.PORT || 4000,
};

module.exports = config;