const express = require('express');
const AuthController = require('../controllers/authController');

const authController = new AuthController();

const apiV1Router = express.Router();

apiV1Router.post('/auth/login', express.json(), express.urlencoded({ extended: true }), authController.login);

apiV1Router.post('/auth/logout', express.json(), express.urlencoded({ extended: true }), authController.logout);

module.exports = apiV1Router;