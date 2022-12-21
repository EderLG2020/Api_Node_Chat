const db = require("mongoose");

db.set("strictQuery", false);

db.Promise = global.Promise;

async function connected(url) {
  try {
    await db.connect(url, {
      useNewUrlParser: true,
    });
    console.log("[db] Conectada con éxito");
  } catch (error) {
    console.error("Error en la conexion a la base de datos", error);
  }
}

module.exports = connected;
