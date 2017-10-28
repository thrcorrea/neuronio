const express = require('express');
const StatementsController = require('../controllers/statements');
const LoginService = require('../services/login');

const router = express.Router();

router.use(LoginService.isAuthenticated);

router.get('/', StatementsController.listStatementsByUser);
router.post('/', StatementsController.insertStatement);

router
  .route('/me')
  .get(LoginService.isAuthenticated, StatementsController.getMyStatements);

module.exports = router;
