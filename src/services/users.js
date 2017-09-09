exports.listUsers = function _listUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve([
        {
          id: 1,
          name: 'thales'
        }
      ]);
    }, 100);
  });
};
