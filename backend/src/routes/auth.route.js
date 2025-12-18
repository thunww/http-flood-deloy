const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/auth.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/login", ctrl.login);
router.get("/home", auth, ctrl.home);

module.exports = router;
