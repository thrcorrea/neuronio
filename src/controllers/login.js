const LoginService = require('../services/login');

exports.login = function _login(req, res) {
  LoginService.login(req.body)
    .then(token => res.send({ success: true, token, email: req.body.email }))
    .catch(err => {
      res.send({ success: false, err: err.message });
    });
};

exports.loginFacebook = function _loginFacebook(req, res, next) {
  LoginService.loginFacebook(req, res, next)
    .then(token => res.send({ success: true, token }))
    .catch(err => res.send({ success: false, err: err.message }));
};

exports.loginGoogle = function _loginGoogle(req, res, next) {
  LoginService.loginGoogle(req, res, next)
    .then(token => res.send({ success: true, token }))
    .catch(err => res.send({ success: false, err: err.message }));
};
