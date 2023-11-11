const express  = require("express");
const loginControl = require("./control/loginControl");
const clienteControl = require("./control/clienteControl");

const router = express.Router();

router.get("/login", loginControl.getAll);

router.get("/getCliente", clienteControl.getAll);
router.post("/postCliente", clienteControl.postCliente);

module.exports = router;