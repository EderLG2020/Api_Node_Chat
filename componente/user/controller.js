const store = require("./store");

function addUser(user) {
  return new Promise((resolve, reject) => {
    if (!user) {
      console.error("[Error(message_controller)]");
      return reject("los Datos son incorrectos");
    }
    const fullUser = {
      name: user,
    };
    store.addS(fullUser);
    console.log("se envio", fullUser);
    resolve(fullUser);
  });
}

function deleteUser(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject("Id invalido");
    }

    resolve(store.deleteS(id));
  });
}

function editUser(id, name) {
  return new Promise(async (resolve, reject) => {
    if (!id || !name) {
      return reject("Invalid data");
    }

    const result = await store.editS(id, name);

    resolve(result);
  });
}

function listUser(filter) {
  return new Promise((resolve, reject) => {
    resolve(store.listS(filter));
  });
}

module.exports = {
  addC: addUser,
  listC: listUser,
  editC: editUser,
  deleteC: deleteUser,
};
