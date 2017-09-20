const LoginService = require('../services/login');

exports.login = function _login(req, res) {
  LoginService.login(req.body)
    .then(token => res.send({ success: true, token, email: req.body.email }))
    .catch(err => {
      res.send({ success: false, err: err.message });
    });
};
