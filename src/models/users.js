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
