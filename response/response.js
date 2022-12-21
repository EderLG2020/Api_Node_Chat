exports.success = (req, res, msg, status) => {
  let respuesta = {
    error: false,
    mensaje: msg,
    body: req.body,
    method: req.method,
  };
  res.status(status).send(respuesta);
};

exports.error = (req, res, msg, status, details) => {
  let respuesta = {
    error: true,
    mensaje: msg,
    body: req.body,
    method: req.method,
    detail: details || "error",
  };
  res.status(status || 500).send(respuesta);
};
