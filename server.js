const express = require("express");
const cors = require('cors')
const usersRouter = require("./src/routes/userRouter.js");
const transactionsRouter = require("./src/routes/transactionRouter.js");
const budgetRouter = require("./src/routes/budgetRouter.js");

const app = express();
app.use(cors())

const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", usersRouter);
app.use("/transaction", transactionsRouter);
app.use("/budget", budgetRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));