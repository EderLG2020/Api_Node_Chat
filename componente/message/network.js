const express = require("express");

const response = require("../../response/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", (req, res) => {
  // const filterMessages = req.query.chat || null;
  // console.log(req.query); en url ?order=id&age=15
  // req.headers
  // res.header({})
  controller
    .listC()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(() => {
      response.error(req, res, "[Error]", 500);
    });
});

router.post("/", (req, res) => {
  // console.log(req.query); en url ?order=id&age=15
  // req.headers
  // res.header({})
  controller
    .addC(req.body.user, req.body.message)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Fallo envio", 400, e);
    });
});

router.patch("/:id", (req, res) => {
  controller
    .editC(req.params.id, req.body.text)
    .then((data) => {
      response.success(req, res, data, 301);
    })
    .catch((e) => {
      response.error(req, res, "Error en editar", 500, e);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .deleteC(req.params.id)
    .then(() => {
      response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error interno", 500, e);
    });
});

module.exports = router;
