const express = require('express');
const AuthController = require('../controllers/authController');
const UserController = require('../controllers/userController');
const registerValidation = require('../middleware/registerValidation')

const authController = new AuthController();
const userController = new UserController();

const apiV1Router = express.Router();

apiV1Router.post('/auth/login', express.json(), express.urlencoded({ extended: true }), authController.login);

apiV1Router.post('/auth/logout', express.json(), express.urlencoded({ extended: true }), authController.logout);

apiV1Router.post('/user/register', express.json(), express.urlencoded({ extended: true }), registerValidation, userController.register);

module.exports = apiV1Router;