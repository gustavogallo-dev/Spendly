//User route
const express = require("express");
const router = express.Router();

//Get route
router.get("/users", (req, res) => {
  res.json({ message: "Lista usuários" });
});

//Post route
router.post("/users", (req, res) => {
  const { name, email } = req.body;

  res.status(201).json({
    message: "Usuário criado",
    user: { name, email },
  });
});

module.exports = router;
