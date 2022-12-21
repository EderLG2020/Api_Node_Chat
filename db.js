const db = require("mongoose");

db.set("strictQuery", false);

db.Promise = global.Promise;

async function connected(url) {
  await db.connect(url, {
    useNewUrlParser: true,
  });
  console.log("[db] Conectada con éxito");
}

module.exports = connected;
