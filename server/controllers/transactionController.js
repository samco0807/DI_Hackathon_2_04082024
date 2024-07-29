const {getAllTransactions, insertTransactions} = require('../models/userModel.js')

const _getAllTransactions = async (req, res) => { 
    try {
        const result = await getAllTransactions();
    res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "something went wrong" });
    }
}

const _insertTransaction = async (req, res) => {
    const { name, email } = req.body;
    try {
      const result = await insertTransactions(name, email);
      // res.json(result);
      _getAllTransactions(req, res)
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: "something went wrong" });
    }
  };


module.exports = {
    _getAllTransactions,
    _insertTransaction,
  };