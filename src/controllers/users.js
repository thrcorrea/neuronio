const UserService = require('../services/users');


function listUsers(req, res) {
  return UserService.listUsers()
    .then((data) => {
      res.send({ success: true, data });
    })
    .catch((err) => {
      res.send({ success: false, err });
    });
}

function insertUser(req, res) {
  UserService.insertUser(req.body)
    .then((data) => {
      res.send({ success: true, data });
    })
    .catch((err) => {
      res.send({ success: false, err });
    });
}

function updateUser(req, res) {
  UserService.updateUser(req.params.user, req.body)
    .then((data) => {
      res.send({ success: true, data });
    })
    .catch((err) => {
      res.send({ success: false, err });
    });
}

function deleteUser(req, res) {
  UserService.deleteUser(req.params.id)
    .then((data) => {
      res.send({ success: true, data });
    })
    .catch((err) => {
      res.send({ success: false, err });
    });
}

module.exports = {
  listUsers,
  insertUser,
  updateUser,
  deleteUser,
};
