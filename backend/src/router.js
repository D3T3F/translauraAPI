const express = require("express");
const loginControl = require("./control/loginControl");
const clienteControl = require("./control/clienteControl");

const router = express.Router();

router.post("/login", loginControl.getAll);

router.get("/getCliente", clienteControl.getAll);
router.post("/postCliente", clienteControl.postCliente);
router.delete("/deleteCliente", clienteControl.deleteCliente);

module.exports = router;
