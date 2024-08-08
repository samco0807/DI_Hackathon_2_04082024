const { db } = require("../config/dbpg.js");

const _getAllTransactions = () => {
  return db("transactions")
    .select(
      "id",
      "amount",
      "description",
      "category",
      "transaction_type",
      "date"
    )
    .orderBy("date");
};
const _getTransactionById = (transactionid) => {
  return db("transactions")
    .select(
      "id",
      "amount",
      "description",
      "category",
      "transaction_type",
      "date"
    )
    .where({ id: transactionid });
};

const _createTransaction = (
  user_id,
  budget_id,
  amount,
  description,
  category,
  transaction_type
) => {
  return db("transactions").insert(
    { user_id, budget_id, amount, description, category, transaction_type },
    ["id"]
  ).returning("*");
};

const _editTransaction = (id, updatedTransaction) => {
  return db("transactions").where("id", id).update(updatedTransaction);
};

const _deleteTransaction = (id) => {
  return db("transactions").where("id", id).del().returning("*");
};

module.exports = {
  _getAllTransactions,
  _getTransactionById,
  _createTransaction,
  _editTransaction,
  _deleteTransaction,
};
