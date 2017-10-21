const express = require('express');
const UsersController = require('../controllers/users');
const LoginService = require('../services/login');

const router = express.Router();

router
  .route('/:user')
  .get(LoginService.isAuthenticated, UsersController.getUser)
  .put(LoginService.isAuthenticated, UsersController.updateUser)
  .delete(LoginService.isAuthenticated, UsersController.deleteUser);

router
  .route('/')
  .get(LoginService.isAuthenticated, UsersController.listUsers)
  .post(UsersController.insertUser);

router.get('/me', UsersController.getMeUser);

module.exports = router;
