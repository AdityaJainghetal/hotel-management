const express = require("express");
const router = express.Router();
const villaController = require("../controller/villaController");
const { isAuth } = require("../utils/auth");
const upload = require('../utils/upload')
/*--------------------------------Villa Routes-------------------------------*/
router.post("/add", upload.array('images', 5), villaController.createVilla);
router.put("/update/:villaId",upload.array('image', 5), villaController.updateVilla);
router.get("/getAll", villaController.getAllVillas);
router.delete("/remove", villaController.removeVilla);
router.get("/findById/:villaId",villaController.getVillaById);
router.post('/create-villa', villaController.createVilla);
module.exports = router;

