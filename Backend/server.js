const express = require("express");
const cors = require("cors");
const connection = require("./connection.js");
const cityRouter = require("./route/cityRouter.js");
const sightRouter = require("./route/sightRouter.js");

const app = express();
app.use(express.json());

app.use(cors()); // Enable CORS for all routes

app.listen(3000);

app.use("/cities", cityRouter);
app.use("/sights", sightRouter);


const express = require("express");
const cors = require("cors");
const connection = require("./connection.js");
const cityRouter = require("./route/cityRouter.js");
const sightRouter = require("./route/sightRouter.js");

// const app = express();
app.use(express.json());

app.use(cors()); // Enable CORS for all routes

app.listen(3000);

app.use("/cities", cityRouter);
app.use("/sights", sightRouter);

// nektarios nikoleta