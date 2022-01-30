const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
const router = express.Router();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port =  5000;
app.use(cors());
app.use(express.json());
router.use(require("./routes/user"));
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);