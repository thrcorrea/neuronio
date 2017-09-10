exports.insertUser = function _insertUser(database, user) {
  return database
    .data('https://database-neuroniohomolog.wedeploy.io')
    .create('users', user)
    .then(insertedUser => console.log(insertedUser));
};

exports.listUsers = function _listUsers(database) {
  return database
    .data('https://database-neuroniohomolog.wedeploy.io')
    .get('users')
    .then(users => users);
};

exports.getUser = function _getUser(database, userId) {
  return database
    .data('https://database-neuroniohomolog.wedeploy.io')
    .where('id', '=', userId)
    .get('users')
    .then(users => users);
};

exports.deleteUser = function _deleteUser(database, userId) {
  return database
    .data('https://database-neuroniohomolog.wedeploy.io')
    .delete(`users/${userId}`);
};

exports.updateUser = function _updateUser(database, userId, user) {
  return database
    .data('https://database-neuroniohomolog.wedeploy.io')
    .update(`users/${userId}`, user)
    .then(updatedUser => updatedUser);
};
