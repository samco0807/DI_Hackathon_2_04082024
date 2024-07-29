const {getAllUsers, insertUsers} = require('../models/userModel.js')

const _getAllUsers = async (req, res) => { 
    try {
        const result = await getAllUsers();
    res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "something went wrong" });
    }
}

const _insertUsers = async (req, res) => {
    const { name, email } = req.body;
    try {
      const result = await insertUsers(name, email);
      // res.json(result);
      _getAllProducts(req, res)
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: "something went wrong" });
    }
  };


module.exports = {
    _getAllUsers,
    _insertUsers,
  };