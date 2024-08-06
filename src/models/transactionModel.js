const { db } = require("../config/dbpg.js");

const _getAllTransactions = () => {
  return db("transactions")
    .select("id", "amount", "description", "category", "transaction_type", "date")
    .orderBy("date");
};
const _getTransactionById = (transactionid) => {
  return db("transactions")
    .select("id","amount", "description", "category", "transaction_type", "date")
    .where({ id: transactionid });
};

const _createTransaction = (
  userId,
  budgetId,
  amount,
  description,
  category,
  transactionType
) => {
  return db("transactions").insert(
    { userId, budgetId, amount, description, category, transactionType },
    ["id"]
  );
};

const _editTransaction = (id, updatedTransaction) => {
  return db("transactions").where("id", id).update(updatedTransaction);
};
const _deleteTransaction = (id) => {
  return db("transactions").where("id", id).del({ id });
};

module.exports = {
  _getAllTransactions,
  _getTransactionById,
  _createTransaction,
  _editTransaction,
  _deleteTransaction,
};