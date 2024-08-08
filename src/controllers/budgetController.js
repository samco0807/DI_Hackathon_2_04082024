const {
  _getAllBudgets,
  _getBudgetById,
  _createBudget,
  _editBudget,
  _deleteBudget,
} = require("../models/budgetModel.js");

const getAllBudgets = async (req, res) => {
  try {
    const result = await _getAllBudgets();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Cannot retrieve all Budgets" });
  }
};

const getBudgetById = async (req, res) => {
  try {
    const budgetId = req.params.id;
    const budget = await _getBudgetById(budgetId);
    if (budget.length === 0) {
      return res.status(404).json({ error: "Can not retrieve the request budget" });
    }
    res.json(budget);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createBudget = async (req, res) => {
  try {
    const { user_id, name, amount, category } = req.body;
    const result = await _createBudget(user_id, name, amount, category);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Budget cannot be created" });
  }
};

const editBudget = async (req, res) => {
  try {
    const { name, limit, category } = req.body;
    const result = await _editBudget(name, limit, category);
    res.status(200).json({ message: "Budget edited successfully", result });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Budget cannot be edited" });
  }
};

const deleteBudget = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBudget = await _deleteBudget(id);
    // res.json(deleteBudget);
    res.status(200).json({ message: 'Budget deleted successfully', deleteBudget });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Budget cannot be deleted" });
  }
};

module.exports = {
  getAllBudgets,
  getBudgetById,
  createBudget,
  editBudget,
  deleteBudget,
};