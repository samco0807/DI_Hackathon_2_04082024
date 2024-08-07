const { db } = require("../config/dbpg.js");

const _getAllBudgets = () => {
  return db("budgets").select("id", "name", "budget_limit", "category");
  // .orderBy("budget_limit");
};

const _getBudgetById = (budgetid) => {
  return db("budgets")
    .select("id", "name", "budget_limit", "category")
    .where({ id: budgetid });
};

const _createBudget = (user_id, name, budget_limit, category) => {
  return db("budgets").insert({ user_id, name, budget_limit, category }, [
    "user_id",
    "name",
    "budget_limit",
    "category",
  ]).returning("*");
};

const _editBudget = (id, updatedBudget) => {
  return db("budgets").where("id", id).update(updatedBudget).returning("*");
};

const _deleteBudget = (id) => {
  return db("budgets").where("id", id).del().returning("*");
};

module.exports = {
  _getAllBudgets,
  _getBudgetById,
  _createBudget,
  _editBudget,
  _deleteBudget,
};
