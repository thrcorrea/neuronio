const StatementsModel = require('../models/statements');
const weDeploy = require('wedeploy');
const moment = require('moment');

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

  return StatementsModel.insertStatement(weDeploy, insertStatement);
};
