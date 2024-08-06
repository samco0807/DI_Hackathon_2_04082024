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
    res.status(404).json({ message: "Cannot retrieve the users" });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await _getUserById(userId);
    if (user.length === 0) {
      return res.status(404).json({ error: "Cannot retrieve this specific user" });
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
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Cannot create the user" });
  }
};

// Edit a user
const editUser = async (req, res) => {
  const { name, email } = req.params.id;
  try {
    const result = await _editUser(name, email);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Cannot edit the user" });
  }
};

// delete a user
const deleteUser = async (req, res) => {
  const { name, email } = req.params.id;
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
