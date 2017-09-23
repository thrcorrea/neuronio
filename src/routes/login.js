const express = require('express');
const LoginController = require('../controllers/login');
const passport = require('../auth/passport');

const router = express.Router();

router.post('/', LoginController.login);
router.post('/facebook', passport.authenticate('facebook', { session: false }));
router.post(
  '/facebook/return',
  passport.authenticate('facebook', { session: false }),
  LoginController.loginFacebook
);

module.exports = router;
