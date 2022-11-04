const express = require("express");
const whatsappController = require("../controllers/whatsapp.controller");

const router = express.Router()


router.get("/", whatsappController.verifyToken)

router.post("/", whatsappController.ReceivedMessage)


module.exports = router;

