const { query } = require("express");
const express = require("express");

// recordRoutes is an instance of the express router.

// We use it to define our routes.

// The router will be added as a middleware and will take control of requests starting with path /record.

const recordRoutes = express.Router();

// This will help us connect to the database

const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.

const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the loyalty programs.

recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("merntest0");

  db_connect

    .collection("LoyaltyPrograms")

    .find({})

    .toArray(function (err, result) {
      if (err) throw err;

      res.json(result);
    });
});

//returns an array of jsons of transactions
recordRoutes.route("/transactions").get(function (req, res) {
  let db_connect = dbo.getDb("merntest0");

  db_connect

    .collection("Transactions")

    .find({})

    .toArray(function (err, result) {
      if (err) throw err;

      res.json(result);
    });
});

// This section will help you get a single record by id

recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();

  let myquery = { _id: ObjectId(req.params.id) };

  db_connect

    .collection("LoyaltyPrograms")

    .findOne(myquery, function (err, result) {
      if (err) throw err;

      res.json(result);
    });
});

// This section will help you create a new record.

recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();

  let myobj = {
    name: req.body.name,

    position: req.body.position,

    level: req.body.level,
  };

  db_connect
    .collection("LoyaltyPrograms")
    .insertOne(myobj, function (err, res) {
      if (err) throw err;

      response.json(res);
    });
});

// This section will help you update a record by id.

recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();

  let myquery = { _id: ObjectId(req.params.id) };

  let newvalues = {
    $set: {
      name: req.body.name,

      position: req.body.position,

      level: req.body.level,
    },
  };
});

// This section will help you delete a record

recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();

  let myquery = { _id: ObjectId(req.params.id) };

  db_connect
    .collection("LoyaltyPrograms")
    .deleteOne(myquery, function (err, obj) {
      if (err) throw err;

      console.log("1 document deleted");

      response.json(obj);
    });
});

//This section checks if a transaction is complete
recordRoutes.route("/status").get(async function (req, res) {
  const db_connect = dbo.getDb();
  const memberid = req.body.MemberID;
  const query = { MemberID: memberid };
  const transaction = await db_connect
    .collection("Transactions")
    .findOne(query); // returns the transaction of that member
  const status = transaction.Status;
  console.log(status);
  if (status === "0") {
    res.send("Transaction pending");
  } else if (status === "1") {
    res.send("Transaction successful");
  } else if (status === "2") {
    res.send("Transaction failed");
  } else {
    res.send("Error, Unable to retrieve transaction status");
  }
});

module.exports = recordRoutes;
