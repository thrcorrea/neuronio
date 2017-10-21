const express = require('express');
const UsersController = require('../controllers/users');
const LoginService = require('../services/login');

const router = express.Router();

router.post('/', UsersController.insertUser);

router.use(LoginService.isAuthenticated);

router.get('/', UsersController.listUsers);
router.get('/:user', UsersController.getUser);
router.get('/me', UsersController.getMeUser);
router.put('/:user', UsersController.updateUser);
router.delete('/:user', UsersController.deleteUser);

module.exports = router;
