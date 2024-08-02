const { db } = require("../config/dbpg.js");

const _getAllUsers = () => {
  return db("users").select("id", "username", "email").orderBy("username");
};

const _getUserById = () => { 
  return db("users").select("id", "username", "email").where({"id":user.id});
 }

const _createUser = (
  userId,
  username,
  email,
  password_hash,
  createdAt,
  updatedAt
) => {
  return db("users").insert(
    { userId, username, email, password_hash, createdAt, updatedAt },
    ["id", "username", "email", "password", "created_at", "updated_at"]
  );
};

const _editUser = (id, updatedUser) => {
  return db("users").where("id", id).update(updatedUser);
};

const _deleteUser = (id) => {
  return db("users").where("id", id).del({id});
};

module.exports = {
  _getAllUsers,
  _getUserById,
  _createUser,
  _editUser,
  _deleteUser,
};