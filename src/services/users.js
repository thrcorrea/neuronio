const UsersModel = require('../models/users');
const weDeploy = require('wedeploy');

exports.listUsers = function _listUsers() {
  return UsersModel.listUsers(weDeploy);
};

exports.insertUser = function _inserUser(user) {
  return UsersModel.insertUser(weDeploy, user);
};
