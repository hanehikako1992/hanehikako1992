'use strict';
const express = require("express");
const app = express();
const path = require("path")
const serverless = require('serverless-http');


// app.use(express.static(path.join(__dirname, "")))
app.use(express.static(path.join(__dirname, 'build')));
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

app.use(cors());
app.use(express.json());
app.use(require("./routes/user"));
// get driver connection

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
module.exports = app
module.exports.handler = serverless(app)
