const { db } = require("../config/dbpg.js");

const _getAllBudgets = () => {
  return db("budget")
    .select(
      "id",
      "name",
      "start_date",
      "end_date",
      "budget_amount",
      "category",
      "notes"
    )
    .orderBy("date");
};
const _getBudgetById = () => {
  return db("budget")
    .select(
      "id",
      "name",
      "start_date",
      "end_date",
      "budget_amount",
      "category",
      "notes"
    )
    .where({ id: budget.id });
};

const _createBudget = (budgetId, name, limit, category) => {
  return db("budget").insert({ budgetId, name, limit, category }, [
    "id",
    "name",
    "start_date",
    "end_date",
    "budget_amount",
    "category",
    "notes",
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
