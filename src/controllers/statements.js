const StatementsService = require('../services/statements');

exports.listStatementsByUser = function _listSattementsByUser(req, res) {
  return StatementsService.listStatementsByUser(req.query.userId)
    .then(data => {
      res.send({ success: true, data });
    })
    .catch(err => {
      res.send({ success: false, err });
    });
};

exports.insertStatement = function _insertStatement(req, res) {
  return StatementsService.insertStatement(req.body)
    .then(data => {
      res.send({ success: true, data });
    })
    .catch(err => {
      res.send({ success: false, err });
    });
};
