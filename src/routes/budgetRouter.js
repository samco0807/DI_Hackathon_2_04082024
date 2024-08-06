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
router.post("/budget", createBudget);
router.put("/budget/:id", editBudget);
router.delete("/budget/:id", deleteBudget);

module.exports = router;