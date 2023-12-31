const express = require("express");
const stuffCtrl = require('../controllers/stuff')
const auth = require('../middleware/auth')
const router = express.Router();

router.get("/",stuffCtrl.getAllThing);
router.post("/",stuffCtrl.createThing);
router.get("/:id",stuffCtrl.getOneThing);
router.put("/:id",stuffCtrl.modifyThing);
router.delete("/:id",stuffCtrl.deleteThing);

module.exports = router;
