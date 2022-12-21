const modelMessage = require("./model");

function addS(message) {
  const myMessage = new modelMessage(message);
  myMessage.save();
}

async function listS() {
  //   let filter = {};
  //   if (filterChat !== null) {
  //     filter = { chat: filterChat };
  //   }
  return await modelMessage.find();

  // .populate("user")
  // .exec((error, populated) => {
  //   if (error) {
  //     reject(error);
  //     return false;
  //   }

  //   resolve(populated);
  // });
}

async function editS(id, message) {
  const messageFound = await modelMessage.findOne({
    _id: id,
  });
  messageFound.message = message;
  const newMessage = messageFound.save();
  return newMessage;
}

function deleteS(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  addS,
  listS,
  editS,
  deleteS,
};
