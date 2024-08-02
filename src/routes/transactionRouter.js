const express = require("express");
const router = express.Router();

const {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController.js");

router.get("/transaction", getAllTransactions);
router.get("/:transaction:id", getTransactionById);
router.get("/transaction", createTransaction);
router.get("/transaction:id", editTransaction);
router.get("/transaction:id", deleteTransaction);

module.exports = router;
