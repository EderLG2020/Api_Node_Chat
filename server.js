const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();
const path = require("path");
const response = require("./response/response");

// body-parser no es necesario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

router.get("/", (req, res) => {
  response.success(req, res, "Todo bien", 200);
  // console.log(req.query); en url ?order=id&age=15
  // req.headers
  // res.header({})
});

router.post("/", (req, res) => {
  response.success(req, res, "creado correctamente", 201);
  // console.log(req.query); en url ?order=id&age=15
  // req.headers
  // res.header({})
});

app.use("/app", express.static(path.join(__dirname, "public"))); //no olvidar importar path

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
