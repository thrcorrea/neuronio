const express = require('express');
const LoginController = require('../controllers/login');
const passport = require('../auth/passport');

const router = express.Router();

router.post('/', LoginController.login);
router.get('/facebook', passport.authenticate('facebook', { session: false }));
router.get(
  '/facebook/return',
  passport.authenticate('facebook', { session: false }),
  LoginController.loginFacebook
);

module.exports = router;
