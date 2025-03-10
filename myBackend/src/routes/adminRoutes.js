const express = require('express');
const router = express.Router();

const { isAuth } = require("../utils/auth");

const adminController = require("../controller/adminController");
/*--------------------------------admin Route-------------------------------*/
router.post("/create", adminController.adminCreate);
router.put("/update",isAuth, adminController.updateAdmin);
router.post("/login", adminController.adminLogin); 
router.delete("/remove",isAuth, adminController.removeAdmin);
router.get("/fetch-profile", isAuth, adminController.fetchProfile);
router.put("/update-password", isAuth, adminController.updatePassword);
// router.route("/users").get(getAllUsers)
module.exports = router;