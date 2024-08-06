const { db } = require("../config/dbpg.js");

const _getAllUsers = () => {
  return db("users").select("id", "username", "email").orderBy("username");
};

const _getUserById = (userid) => {
  return db("users").select("id", "username", "email").where({ id: userid });
};

const _createUser = (username, email, password_hash) => {
  return db("users").insert({ username, email, password_hash }, [
    "username",
    "email",
    "password_hash",
  ]);
};

const _editUser = (id, updatedUser) => {
  return db("users").where("id", id).update(updatedUser);
};

const _deleteUser = (id) => {
  return db("users").where("id", id).del({ id });
};

module.exports = {
  _getAllUsers,
  _getUserById,
  _createUser,
  _editUser,
  _deleteUser,
};
