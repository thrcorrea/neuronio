const UsersModel = require('../models/users');
const weDeploy = require('wedeploy');

exports.listUsers = function _listUsers() {
  return UsersModel.listUsers(weDeploy);
};

exports.insertUser = function _inserUser(user) {
  return UsersModel.insertUser(weDeploy, user);
};

exports.getUser = function _getUser(userId) {
  return UsersModel.getUser(weDeploy, userId);
};

exports.updateUser = function _updateUser(userId, user) {
  return UsersModel.updateUser(weDeploy, userId, user);
};

exports.deleteUser = function _deleteUser(userId) {
  return UsersModel.deleteUser(weDeploy, userId);
};
