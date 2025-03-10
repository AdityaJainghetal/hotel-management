const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { isAuth } = require("../utils/auth");

/*--------------------------------user Routes-------------------------------*/
router.post("/register", userController.register);
router.post("/login", userController.userLogin);
router.put("/update", isAuth, userController.update);
router.delete("/remove", isAuth, userController.remove);
router.get("/find-By-Id", isAuth, userController.findUserById);
router.put("/update-password", isAuth, userController.updatePassword);
module.exports = router; 
