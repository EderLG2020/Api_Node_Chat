const express = require("express");
const message = require("../componente/message/network");
const user = require("../componente/user/network");
const chat = require("../componente/chat/network");

const routes = (server) => {
  server.use("/message", message);
  server.use("/user", user);
  server.use("/chat", chat);
};

module.exports = routes;
