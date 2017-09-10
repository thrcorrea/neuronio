const UserService = require('../services/users');

exports.getUser = function _getUser(req, res) {
  return UserService.getUser(req.params.user)
    .then(data => {
      res.send({ success: true, data });
    })
    .catch(err => {
      res.send({ success: false, err });
    });
};

exports.listUsers = function _listUsers(req, res) {
  return UserService.listUsers()
    .then(data => {
      res.send({ success: true, data });
    })
    .catch(err => {
      res.send({ success: false, err });
    });
};

exports.insertUser = function _insertUser(req, res) {
  UserService.insertUser(req.body)
    .then(data => {
      res.send({ success: true, data });
    })
    .catch(err => {
      res.send({ success: false, err });
    });
};

exports.updateUser = function _updateUser(req, res) {
  UserService.updateUser(req.params.user, req.body)
    .then(data => {
      res.send({ success: true, data });
    })
    .catch(err => {
      res.send({ success: false, err });
    });
};

exports.deleteUser = function _deleteUser(req, res) {
  UserService.deleteUser(req.params.user)
    .then(() => {
      res.send({ success: true });
    })
    .catch(err => {
      res.send({ success: false, err });
    });
};
