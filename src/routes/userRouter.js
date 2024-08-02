const express = require("express");

const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
} = require("../controllers/userController.js");

router.get("/user", getAllUsers);
router.get("/user:id", getUserById);
router.post("/user", createUser);
router.put("/user:id", editUser);
router.delete("/user:id", deleteUser);

module.exports = router;
