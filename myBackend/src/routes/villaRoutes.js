const express = require("express");
const router = express.Router();
const villaController = require("../controller/villaController");
const { isAuth } = require("../utils/auth");
const upload = require('../utils/upload')
/*--------------------------------Villa Routes-------------------------------*/
router.post("/add", upload.single('image'), villaController.createVilla);
router.put("/update/:villaId",upload.array('images', 5), villaController.updateVilla);
router.get("/getAll", villaController.getAllVillas);
router.delete("/remove", villaController.removeVilla);
router.get("/findById/:villaId",villaController.getVillaById);
router.post('/create-villa', villaController.createVilla);
router.get('/payment/success', villaController.paymentSuccess);
module.exports = router;

