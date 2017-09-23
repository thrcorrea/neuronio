/*
  User {
    name,
    email,
    password,
    facebookId,
  }

*/

require('dotenv').config();

const databaseUrl = process.env.DATABASE_URL;

exports.insertUser = function _insertUser(database, user) {
  return database
    .data(databaseUrl)
    .create('users', user)
    .then(insertedUser => insertedUser);
};

exports.listUsers = function _listUsers(database) {
  return database
    .data(databaseUrl)
    .get('users')
    .then(users => users);
};

exports.getUser = function _getUser(database, userId) {
  return database
    .data(databaseUrl)
    .where('id', '=', userId)
    .get('users')
    .then(users => users);
};

exports.deleteUser = function _deleteUser(database, userId) {
  return database.data(databaseUrl).delete(`users/${userId}`);
};

exports.updateUser = function _updateUser(database, userId, user) {
  return database
    .data(databaseUrl)
    .update(`users/${userId}`, user)
    .then(updatedUser => updatedUser);
};

exports.findUserByEmail = function _findUserByEmail(database, user) {
  return database
    .data(databaseUrl)
    .where('email', '=', user.email)
    .get('users')
    .then(foundUser => {
      return foundUser[0] || null;
    });
};

exports.findUserByGoogle = function _findUserByGoogle(database, profile) {
  return database
    .data(databaseUrl)
    .where('googleId', '=', profile.id)
    .get('users')
    .then(foundUser => {
      return foundUser[0] || null;
    });
};

exports.findUserByFacebook = function _findUserByFacebook(database, profile) {
  return database
    .data(databaseUrl)
    .where('facebookId', '=', profile.id)
    .get('users')
    .then(user => user[0] || null);
};
