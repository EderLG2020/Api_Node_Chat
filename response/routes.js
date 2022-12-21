const express = require("express");
const message = require("../componente/message/network");

const routes = (server) => {
  server.use("/message", message);
};

module.exports = routes;
