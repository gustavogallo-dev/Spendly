//Routes
const express = require("express");
const router = express.Router();

//Fake bank
const transactions = [];

//Creating a transaction
router.post("/transactions", (req, res) => {
  const { title, amount, type } = req.body;

  const transaction = {
    id: transactions.length + 1,
    title,
    amount,
    type,
    createdAt: new Date(),
  };

  transactions.push(transaction);

  res.status(201).json(transaction);
});

//Creating the transactions list
router.get("/transactions", (req, res) => {
  res.json(transactions);
});

//Balance/Brains API
router.get("/balance", (req, res) => {
  let income = 0;
  let expense = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === "income") {
      income += transaction.amount;
    }

    if (transaction.type === "expense") {
      expense += transaction.amount;
    }
  });

  const balance = income - expense;

  res.json({
    income,
    expense,
    balance,
  });
});

module.exports = router;
