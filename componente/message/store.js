const modelMessage = require("./model");

function addS(message) {
  const myMessage = new modelMessage(message);
  myMessage.save();
}

async function listS(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  return await modelMessage.find(filter);

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
  return modelMessage.deleteOne({
    _id: id,
  });
}

module.exports = {
  addS,
  listS,
  editS,
  deleteS,
};
