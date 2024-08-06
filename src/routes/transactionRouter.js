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
router.get("/transaction/:id", getTransactionById);
router.post("/transaction", createTransaction);
router.put("/transaction/:id", editTransaction);
router.delete("/transaction/:id", deleteTransaction);

module.exports = router;
