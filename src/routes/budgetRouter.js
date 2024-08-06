const express = require("express");
const router = express.Router();
const {
  getAllBudgets,
  getBudgetById,
  createBudget,
  editBudget,
  deleteBudget,
} = require("../controllers/budgetController.js");

router.get("/budget", getAllBudgets);
router.get("/budget/:id", getBudgetById);
router.get("/budget", createBudget);
router.get("/budget/:id", editBudget);
router.get("/budget/:id", deleteBudget);

module.exports = router;