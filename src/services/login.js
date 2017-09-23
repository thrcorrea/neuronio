const jwt = require('jsonwebtoken');
const UserService = require('./users');

function encodeToken(user) {
  return jwt.sign({ sub: user.id }, process.env.JWT_SECRET, {
    expiresIn: '2h'
  });
}

function decodeToken(token, callback) {
  return jwt.verify(token, process.env.JWT_SECRET, callback);
}

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    decodeToken(token, (err, payload) => {
      if (err) return reject(err);
      return resolve(payload);
    });
  });
}

exports.login = function _login(user) {
  return UserService.findUserByEmail(user).then(foundUser => {
    if (!foundUser) throw new Error('Usuário não encontrado.');
    if (!user.password) throw new Error('Senha não providenciada.');
    if (!UserService.comparePassword(user.password, foundUser.password)) {
      throw new Error('Senha inválda.');
    }
    return encodeToken(foundUser);
  });
};

exports.loginFacebook = function _loginFacebook(req, res, next) {
  return encodeToken(req.user);
};

exports.isAuthenticated = function _isAuthenticated(req, res, next) {
  if (!req.headers || !req.headers.authorization) {
    return res.status(401).send({ success: false, message: 'Please log in!' });
  }
  const token = req.headers.authorization.split(' ')[1];
  return verifyToken(token)
    .then(payload => {
      req.user = payload.sub;
      next();
    })
    .catch(err => res.status(401).send({ success: false, message: err }));
};
