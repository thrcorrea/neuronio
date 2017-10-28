/*
  Statement {
    userId ,
    amount ,
    description ,
    dateTime ,
    type ,
  }
*/

require('dotenv').config();

const databaseUrl = process.env.DATABASE_URL;

exports.insertStatement = function _insertStatement(database, statement) {
  return database
    .data(databaseUrl)
    .create('statements', statement)
    .then(insertedStatement => insertedStatement);
};

exports.listStatementsByUser = function _listStatementsByUser(
  database,
  userId
) {
  return database
    .data(databaseUrl)
    .where('userId', '=', userId)
    .get('statements')
    .then(statements => statements);
};

exports.getStatement = function _getStatement(database, statementId) {
  return database
    .data(databaseUrl)
    .where('id', '=', statementId)
    .get('statements')
    .then(statements => statements);
};
