const express = require("express");

const response = require("../../response/response");
const controller = require("./controller");
const router = express.Router();

router.get("/:userid", (req, res) => {
  controller
    .listC(req.params.userid)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "[Error]", 500, e);
    });
});

router.post("/", (req, res) => {
  controller
    .addC(req.body.users)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Fallo envio", 400, e);
    });
});

module.exports = router;
