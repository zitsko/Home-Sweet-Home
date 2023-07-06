const express = require("express");
const cors = require("cors");
const connection = require("./connection.js");
const homeRouter = require("./router/homeRouter.js");
const userRouter = require("./router/userRouter.js");

const app = express();
app.use(express.json());

app.use(cors()); // Enable CORS for all routes

app.use("/user", userRouter);
app.use("/homes", homeRouter);
app.listen(3000);
