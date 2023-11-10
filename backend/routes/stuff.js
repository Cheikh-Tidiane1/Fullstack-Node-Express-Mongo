const express = require("express");
const stuffCtrl = require('../controllers/stuff')
const auth = require('../controllers/auth')
const router = express.Router();

router.get("/",auth,stuffCtrl.getAllThing);
router.get("/:id",auth,stuffCtrl.getOneThing);
router.post("/",auth,stuffCtrl.createThing);
router.put("/:id",auth,stuffCtrl.modifyThing);
router.delete("/:id",auth,stuffCtrl.deleteThing);


module.exports = router;
