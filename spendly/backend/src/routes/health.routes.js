//First route
const express = require("express");
const router = express.Router();

router.get("/health", (req, res) => {
  res.json({ status: "API Spendly rodando" });
});

module.exports = router;
