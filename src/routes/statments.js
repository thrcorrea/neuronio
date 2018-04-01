const express = require('express');
const StatementsController = require('../controllers/statements');
const LoginService = require('../services/login');
const validator = require('express-joi-validation')({ allowUnknown: true });
const joi = require('joi');

const statementSchema = joi.object({
  userId: joi.string().required(),
  amount: joi.number().required(),
  description: joi.string().required(),
  type: joi.string().required()
});

const router = express.Router();

router.use(LoginService.isAuthenticated);

router.get('/', StatementsController.listStatementsByUser);
router.post(
  '/',
  validator.body(statementSchema),
  StatementsController.insertStatement
);

router
  .route('/me')
  .get(LoginService.isAuthenticated, StatementsController.getMyStatements);

module.exports = router;
