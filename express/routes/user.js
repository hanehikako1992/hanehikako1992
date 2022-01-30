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

const client = async () => {
  let cli = await mongodb.connect(Db, { useUnifiedTopology: true })
  return cli
}
// This section will help you create a new record.
recordRoutes.route("/user/add").post(function (req, response) {
  const cli = client()
  const db_connect = cli.db("meta3oys")

  // let db_connect = dbo.getDb();
  console.log(db_connect)
  let myobj = {
    email: req.body.email,
    wallet: req.body.wallet,
    balance: req.body.balance,
    phone: req.body.phone,
  };
  console.log(myobj)
  db_connect.collection("users").findOne({email: myobj["email"]}, (err, res) => {
    if (err) throw err;
    if (res !== null){
      return response.status(400).send({message: 0})
    }
    db_connect.collection("users").findOne({wallet: myobj["wallet"]}, (err, res) => {
      if (err) throw err;
      if (res !== null){
        return response.status(400).send({message: 1})
      }
      db_connect.collection("users").findOne({wallet: myobj["phone"]}, (err, res) => {
        if (err) throw err;
        if (res !== null){
          return response.status(400).send({message: 2})
        }
        db_connect.collection("users").insertOne(myobj, function (err, res) {
          if (err) throw err;
          response.json(res);
        });
      }) 
    }) 
  })
});

module.exports = recordRoutes;
