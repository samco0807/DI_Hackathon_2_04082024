const { db } = require("../config/dbpg.js");

const _getAllTransactions = () => {
  return db("transactions")
    .select("id", "description", "category", "type", "date")
    .orderBy("date");
};
const _getTransactionById = () => {
  return db("transactions")
    .select("id", "description", "category", "type", "date")
    .where({ id: transactions.id });
};

const _createTransaction = (
  transactionId,
  description,
  category,
  type,
  date
) => {
  return db("transactions").insert(
    { transactionId, description, category, type, date },
    ["id", "description", "category", "type", "date"]
  );
};

const _editTransaction = (id, updatedTransaction) => {
  return db("transactions").where("id", id).update(updatedTransaction);
};
const _deleteTransaction = (id) => {
  return db("transactions").where("id", id).del({id});
};

module.exports = {
  _getAllTransactions,
  _getTransactionById,
  _createTransaction,
  _editTransaction,
  _deleteTransaction,
};
