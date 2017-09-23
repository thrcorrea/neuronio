const UsersModel = require('../models/users');
const weDeploy = require('wedeploy');
const bcrypt = require('bcrypt-nodejs');

exports.listUsers = function _listUsers() {
  return UsersModel.listUsers(weDeploy);
};

exports.insertUser = function _inserUser(user) {
  const newUser = Object.assign({}, user);
  newUser.password = bcrypt.hashSync(newUser.password);
  return UsersModel.insertUser(weDeploy, newUser);
};

exports.findOrCreateFacebook = function _findOrCreateFacebook(profile) {
  return UsersModel.findUserByFacebook(weDeploy, profile).then(user => {
    if (user) return user;
    return UsersModel.insertUser(weDeploy, {
      name: profile.displayName,
      facebookId: profile.id
    });
  });
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

exports.findUserByEmail = function _findUserByEmail(user) {
  return UsersModel.findUserByEmail(weDeploy, user);
};

exports.comparePassword = function _comparePassword(
  password,
  databasePassword
) {
  return bcrypt.compareSync(password, databasePassword);
};
