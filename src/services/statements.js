const StatementsModel = require('../models/statements');
const UsersModel = require('../models/users');
const weDeploy = require('wedeploy');
const moment = require('moment');

function updateUserBalance(statement) {
  let user;
  return UsersModel.getUser(weDeploy, statement.userId)
    .then(users => {
      if (!users[0]) return new Error('Usuário não encontrado');
      user = users[0];
      if (user.balance) {
        user.balance += Number(statement.amount);
      } else {
        user.balance = Number(statement.amount);
      }
    })
    .then(() => UsersModel.updateUser(weDeploy, statement.userId, user));
}

exports.listStatementsByUser = function _listStatementsByUser(userId) {
  return StatementsModel.listStatementsByUser(weDeploy, userId);
};

exports.insertStatement = function _insertStatement(statement) {
  const insertStatement = Object.assign(
    {
      dateTime: moment().format('YYYY-MM-DD HH:mm:ss')
    },
    statement
  );

  return updateUserBalance(statement)
    .then(() => StatementsModel.insertStatement(weDeploy, insertStatement))
    .then(insertedStatement => {
      return insertedStatement;
    })
    .catch(err => {
      console.log(err);
    });
};
