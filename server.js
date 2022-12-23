require("dotenv").config();
const express = require("express");
const path = require("path");
const connected = require("./db");
// const ejs= require('ejs')
const router = require("./response/routes");

const url = `mongodb+srv://${process.env.USER}:${process.env.PASS}@${process.env.HOST}/${process.env.DATABASE}?retryWrites=true&w=majority`;

connected(url);
const app = express();
// body-parser no es necesario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// app.use(router);
router(app);

app.use("/app", express.static(path.join(__dirname, "public"))); //no olvidar importar path

app.listen(process.env.PORT, () =>
  console.log(`Se escucha en el puerto ->  ${process.env.PORT}!`)
);
