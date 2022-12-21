const express = require("express");

const response = require("../../response/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", (req, res) => {
  const filterMessages = req.query.user || null;
  // console.log(req.query); en url ?order=id&age=15
  // req.headers
  // res.header({})
  controller
    .listC(filterMessages)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "[Error]", 500, e);
    });
});

router.post("/", (req, res) => {
  // console.log(req.query); en url ?order=id&age=15
  // req.headers
  // res.header({})
  controller
    .addC(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Fallo envio", 400, e);
    });
});

router.patch("/:id", (req, res) => {
  controller
    .editC(req.params.id, req.body.name)
    .then((data) => {
      response.success(req, res, data, 301);
    })
    .catch((e) => {
      response.error(req, res, "Error en editar usuario", 500, e);
    });
});

router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  controller
    .deleteC(req.params.id)
    .then(() => {
      response.success(
        req,
        res,
        `Usuario id ${req.params.id} fue eliminado`,
        200
      );
    })
    .catch((e) => {
      response.error(req, res, "Error interno", 500, e);
    });
});

module.exports = router;
