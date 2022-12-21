const store = require("./store");

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[Error(message_controller)]");
      return reject("los Datos son incorrectos");
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
    store.addS(fullMessage);
    console.log("se envio", fullMessage);
    resolve(fullMessage);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Id invalido");
      return false;
    }

    store
      .deleteS(id)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
}

function editMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    console.log(id);
    console.log(message);
    if (!id || !message) {
      return reject("Invalid data");
    }

    const result = await store.editS(id, message);

    resolve(result);
  });
}

function listMessage() {
  return new Promise((resolve, reject) => {
    resolve(store.listS());
  });
}

module.exports = {
  addC: addMessage,
  listC: listMessage,
  editC: editMessage,
  deleteC: deleteMessage,
};
