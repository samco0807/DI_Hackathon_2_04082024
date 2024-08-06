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
    res.status(404).json({ message: "something went wrong" });
  }
};

const getBudgetById = async (req, res) => {
  try {
    const budgetId = req.params.id;
    const budget = await _getBudgetById(budgetId);
    if (budget.length === 0) {
      return res.status(404).json({ error: "Budget not found" });
    }
    res.json(budget);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createBudget = async (req, res) => {
  const { name, start_date, end_date, amount, category, notes } = req.body;
  try {
    const result = await _createBudget(name, amount, category);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "something went wrong" });
  }
};

const editBudget = async (req, res) => {
  const { name, limit, category } = req.body;
  try {
    const result = await _editBudget(name, limit, category);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "something went wrong" });
  }
};
const deleteBudget = async (req, res) => {
  const { id } = req.body;
  try {
    const result = await _deleteBudget(id);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "something went wrong" });
  }
};

module.exports = {
  getAllBudgets,
  getBudgetById,
  createBudget,
  editBudget,
  deleteBudget,
};
