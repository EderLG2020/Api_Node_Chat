let respuesta = {
  error: false,
  mensaje: "",
  body: "",
  method: "",
};

exports.success = (req, res, msg, status) => {
  respuesta = {
    error: false,
    mensaje: msg,
    body: req.body,
    method: req.method,
  };
  res.status(status).send(respuesta);
};
