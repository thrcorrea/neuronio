const express = require('express');
const UsersController = require('../controllers/users');
const LoginService = require('../services/login');

const router = express.Router();

router
  .route('/')
  .get(LoginService.isAuthenticated, UsersController.listUsers)
  .post(UsersController.insertUser);

router
  .route('/me')
  .get(LoginService.isAuthenticated, UsersController.getMeUser);

router
  .route('/:user')
  .get(LoginService.isAuthenticated, UsersController.getUser)
  .put(LoginService.isAuthenticated, UsersController.updateUser)
  .delete(LoginService.isAuthenticated, UsersController.deleteUser);

module.exports = router;
