const modelChat = require("./model");

function addChat(chat) {
  const mychat = new modelChat(chat);
  console.log(chat);
  mychat.save();
}

async function listChat(filterUserId) {
  return new Promise(async (resolve, reject) => {
    let filter = {};
    if (filterUserId) {
      filter = { users: filterUserId };
    }
    const listChatT = await modelChat
      .find(filter)
      .populate("users")
      .catch((e) => {
        console.error("Error en Component_chat_store", e);
        reject(e);
      });
    resolve(listChatT);
  });
}

module.exports = {
  addS: addChat,
  listS: listChat,
};
