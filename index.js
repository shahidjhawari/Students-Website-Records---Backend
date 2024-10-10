require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();
const router = require("./router/register-router");
const update = require("./router/update-router");
const deleteUser = require("./router/delete-router");
const getUser = require("./router/get-router");
const getAllUser = require("./router/getAll-router");
const login = require("./router/login-router");
const connection = require("./db/connection");
const cors = require("cors");

app.use(cors());
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', "PATCH"],
};


app.use(express.json());
app.use("/api", router);
app.use("/api", update);
app.use("/api", deleteUser);
app.use("/api", getUser);
app.use("/api", getAllUser);
app.use("/api", login);


const port = process.env.PORT;

app.use("/api", router);

connection().then(app.listen(port, () => {
  console.log("Server is runnig on " + port);
}));