const {
  _getAllUsers,
  _createUser,
  _getUserById,
  _editUser,
  _deleteUser,
} = require("../models/userModel.js");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const result = await _getAllUsers();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "something went wrong" });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  const result = await _getUserById();
  try {
    const userId = req.params.id;
    const userIndex = users.find((item) => item.id == userId);
    if (!userIndex) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create new user
const createUser = async (req, res) => {
  const { username, email } = req.body;
  try {
    const result = await _createUser(username, email);
    // res.json(result);
    _getAllUsers(req, res);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "something went wrong" });
  }
};

// Edit a user
const editUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await _editUser(name, email);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "something went wrong" });
  }
};

// delete a user
const deleteUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await _deleteUser(name, email);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "something went wrong" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
};