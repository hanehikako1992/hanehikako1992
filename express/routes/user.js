const express = require("express");
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

const Db = "mongodb+srv://yamane:r3XzaTIrj0W1BXwA@meta3oys-cluster1.sfdgf.mongodb.net/meta3oys?retryWrites=true&w=majority" ;

const mongodb = require("mongodb")

// This will help us connect to the database
// const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.

// This section will help you create a new record.
recordRoutes.route("/user/add").post(function (req, response) {
  
});

module.exports = recordRoutes;
