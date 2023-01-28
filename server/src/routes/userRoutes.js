const express = require("express");
const router = express.Router();
const userController=require('../controllers/userController')

router.get("/single/:id",userController.getUser)
router.get("/all",userController.getAll)
router.patch("/edit/:id",userController.editUser)
router.delete("/delete/:id",userController.deleteUser)


module.exports = router;


