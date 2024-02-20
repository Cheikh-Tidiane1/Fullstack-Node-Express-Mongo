const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const stuffCtrl = require("../controllers/stuff");
const multer = require("../middleware/multer-config");

router.post("/", auth, multer, stuffCtrl.createThing);
router.get("/:id", auth, stuffCtrl.getOneThing);
router.get("/", auth, stuffCtrl.getAllThing);
router.delete("/:id", auth, stuffCtrl.deleteThing);
router.put("/:id", auth, multer, stuffCtrl.modifyThing);

module.exports = router;
