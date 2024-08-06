const {
  _getAllTransactions,
  _getTransactionById,
  _createTransaction,
  _editTransaction,
  _deleteTransaction,
} = require("../models/transactionModel.js");

// Get all the transactions
const getAllTransactions = async (req, res) => {
  try {
    const result = await _getAllTransactions();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};

// Get a transaction by id
const getTransactionById = async (req, res) => {
  try {
    const transactionId = req.params.id;
    const transaction = await _getTransactionById(transactionId);
    if (transaction.length === 0) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};

// Create a transaction
const createTransaction = async (req, res) => {
  const { userId, budgetId, amount, description, category, transactionType } = req.body;
  try {
    const newTransaction = await _createTransaction(userId, budgetId, amount, description, category, transactionType);
    res.status(201).json({ message: 'Transaction created successfully', transaction: newTransaction });
    res.json(newTransaction);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
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
    res.status(404).json({ message: "Something went wrong" });
  }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await _deleteTransaction(name, email);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};

module.exports = {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  editTransaction,
  deleteTransaction,
};
