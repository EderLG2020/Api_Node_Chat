const express = require("express");
const multer = require("multer");
const response = require("../../response/response");
const controller = require("./controller");
const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/files/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

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

router.post("/", upload.single("file"), (req, res) => {
  // console.log(req.query); en url ?order=id&age=15
  // req.headers
  // res.header({})
  controller
    .addC(req.body.chat, req.body.user, req.body.message, req.file)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Fallo envio", 400, e);
    });

  console.log("🚀 ~ file: network.js:40 ~ router.post ~ req.file", req.file);
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
  console.log(req.params.id);
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
