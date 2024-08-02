const { _getAllBudgets, _getBudgetById, _createBudget, _editBudget, _deleteBudget } = require("../models/budgetModel.js");

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
    const result = await _getBudgetById();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "something went wrong" });
  }
};

const createBudget = async (req, res) => {
  const { name, limit, category } = req.body;
  try {
    const result = await _createBudget(name, limit, category);
    res.json(result);
    _getAllBudgets(req, res);
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
    const result = await _deleteTransaction(id);
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
    deleteBudget
};
