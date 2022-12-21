const modelUser = require("./model");

function addUser(user) {
  const myUser = new modelUser(user);
  console.log(user);
  myUser.save();
}

async function listUser(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { name: filterUser };
  }
  return await modelUser.find(filter);
}

async function editUser(id, name) {
  const userFound = await modelUser.findOne({
    _id: id,
  });
  userFound.name = name;
  const newUser = userFound.save();
  return newUser;
}

function deleteUser(id) {
  return modelUser.deleteOne({
    _id: id,
  });
}

module.exports = {
  addS: addUser,
  listS: listUser,
  editS: editUser,
  deleteS: deleteUser,
};
