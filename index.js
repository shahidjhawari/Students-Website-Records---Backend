require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./router/register-router");
const update = require("./router/update-router");
const deleteUser = require("./router/delete-router");
const getUser = require("./router/get-router");
const connection = require("./db/connection");

app.use(express.json());
app.use("/api", router);
app.use("/api", update);
app.use("/api", deleteUser);
app.use("/api", getUser);


const port = process.env.PORT;

app.use("/api", router);

connection().then(app.listen(port, () => {
  console.log("Server is runnig on " + port);
}));