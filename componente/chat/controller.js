const store = require("./store");

function addChat(users) {
  if (!users || !Array.isArray(users)) {
    console.error("[Error(message_controller)]");
    return Promise.reject("los Datos son incorrectos");
  }
  const fullChat = {
    users: users,
  };
  console.log("se envio", fullChat);
  // return store.addS(fullChat);
  return Promise.resolve(store.addS(fullChat));
}

function listChat(miFilter) {
  return new Promise((resolve, reject) => {
    resolve(store.listS(miFilter));
  });
}

module.exports = {
  addC: addChat,
  listC: listChat,
};
