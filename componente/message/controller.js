const store = require("./store");

function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[Error(message_controller)]");
      return reject("los Datos son incorrectos");
    }

    let fileUrl = "";
    if (file) {
      fileUrl = "http://localhost:3000/app/files/" + file.filename;
    }

    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
      file: fileUrl,
    };
    store.addS(fullMessage);
    console.log("se envio", fullMessage);
    resolve(fullMessage);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject("Id invalido");
    }

    resolve(store.deleteS(id));
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

function listMessage(filter) {
  return new Promise((resolve, reject) => {
    resolve(store.listS(filter));
  });
}

module.exports = {
  addC: addMessage,
  listC: listMessage,
  editC: editMessage,
  deleteC: deleteMessage,
};
