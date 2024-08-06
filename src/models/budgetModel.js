const { db } = require("../config/dbpg.js");

const _getAllBudgets = () => {
  return db("budget")
    .select("id", "name", "budget_limit", "category")
    // .orderBy("budget_limit");
};

const _getBudgetById = (budgetid) => {
  return db("budget")
    .select("id", "name", "budget_limit", "category")
    .where({ id: budgetid });
};

const _createBudget = (budgetId, name, limit, category) => {
  return db("budget").insert({ budgetId, name, limit, category }, [
    "id",
    "name",
    "budget_limit",
    "category",
  ]);
};

const _editBudget = (id, updatedBudget) => {
  return db("budget").where("id", id).update(updatedBudget);
};

const _deleteBudget = (id) => {
  return db("budget").where("id", id).del({ id });
};

module.exports = {
  _getAllBudgets,
  _getBudgetById,
  _createBudget,
  _editBudget,
  _deleteBudget,
};