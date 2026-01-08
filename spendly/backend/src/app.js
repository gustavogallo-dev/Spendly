//Creating the server
const express = require("express");
const healthRoutes = require("./routes/health.routes");
const usersRoutes = require("./routes/users.routes");
const transactionsRoutes = require("./routes/transactions.routes");

const app = express();
app.use(express.json());

//Connection between app.js and routes
app.use("/api", healthRoutes);
app.use("/api", usersRoutes);
app.use("/api", transactionsRoutes);

module.exports = app;
