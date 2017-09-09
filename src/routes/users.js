const express = require('express');
const UsersController = require('../controllers/users');

const router = express.Router();

router.get('/', UsersController.listUsers);

// router.get('/:user', UsersController.getUser);
// router.post('/:user', UsersController.insertUser);
// router.put('/:user', UsersController.updateUser);
// router.delete('/:user', UsersController.deleteUser);

module.exports = router;
