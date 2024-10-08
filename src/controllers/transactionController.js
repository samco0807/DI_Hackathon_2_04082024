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
    res.status(404).json({ message: "Fail to get all transactions" });
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
    res
      .status(200)
      .json({ message: "Transaction got successfully", transaction });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};

// Create a transaction
const createTransaction = async (req, res) => {
  const { userId, budgetId, amount, description, category, transactionType } =
    req.body;
  try {
    const newTransaction = await _createTransaction(
      userId,
      budgetId,
      amount,
      description,
      category,
      transactionType
    );
    res
      .status(200)
      .json({ message: "Transaction created successfully", newTransaction });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Fail to create transaction" });
  }
};

// Edit a transaction
const editTransaction = async (req, res) => {
  try {
    const { name, category, amount, date } = req.body;
    const result = await _editTransaction(name, category, amount, date);
    res.status(200).json({ message: "Transaction edited successfully", result });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
  const { id } = req.body;
  try {
    // res.json(result);
    const deleteTransaction = await _deleteTransaction(id);
    // res.json(deleteBudget);
    res
      .status(200)
      .json({ message: "Transaction deleted successfully", deleteTransaction });
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
