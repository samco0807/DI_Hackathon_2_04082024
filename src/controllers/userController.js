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
      return res
        .status(404)
        .json({ error: "Cannot retrieve this specific user" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create new user
const createUser = async (req, res) => {
  const {
    username,
    email,
    password_hash,
    first_name,
    last_name,
    phone_number,
  } = req.body;
  try {
    const result = await _createUser(
      username,
      email,
      password_hash,
      first_name,
      last_name,
      phone_number
    );
    res.json(result);
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
  try {
    const { id } = req.params;
    const deleteUser = await _deleteUser(id);
    // res.json(deleteBudget);
    res.status(200).json({ message: "User deleted successfully", deleteUser });
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
