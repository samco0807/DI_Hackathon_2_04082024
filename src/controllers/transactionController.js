const {
  _getAllTransactions,
  _getTransactionById,
  _createTransaction,
  _editTransaction,
  _deleteTransaction,
} = require("../models/transactionModel.js");

const getAllTransactions = async (req, res) => {
  try {
    const result = await _getAllTransactions();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "something went wrong" });
  }
};
const getTransactionById = async (req, res) => {
  try {
    const result = await _getTransactionById();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "something went wrong" });
  }
};

const createTransaction = async (req, res) => {
  const { name, category, amount, date } = req.body;
  try {
    const result = await _createTransaction(name, category, amount, date);
    res.json(result);
    _getAllUsers(req, res);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "something went wrong" });
  }
};

// Edit a transaction
const editTransaction = async (req, res) => {
  const { name, category, amount, date } = req.body;
  try {
    const result = await _editTransaction(name, category, amount, date);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "something went wrong" });
  }
};

// delete a transaction
const deleteTransaction = async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await _deleteTransaction(name, email);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "something went wrong" });
  }
};

module.exports = {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  editTransaction,
  deleteTransaction,
};
