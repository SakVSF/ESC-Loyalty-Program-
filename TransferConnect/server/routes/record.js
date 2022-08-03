const { query, response } = require("express");
const express = require("express");
const {Validate} = require("./validation.js")

// recordRoutes is an instance of the express router.

// We use it to define our routes.

// The router will be added as a middleware and will take control of requests starting with path /record.

const recordRoutes = express.Router();

// This will help us connect to the database

const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.

const ObjectId = require("mongodb").ObjectId;

// This api helps to retrieve all the transaction record given a member id

recordRoutes.route("/getTransaction/MemberID").get( (req,res)=>
{   let db_connect = dbo.getDb("merntest0");

db_connect

  .collection("Transactions")
  .find({"MemberID":req.body.memberid})
  .toArray(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
})

recordRoutes.route("/getTransaction/refno").get( (req,res)=>
{   let db_connect = dbo.getDb("merntest0");
db_connect
  .collection("Transactions")
  .find({"RefNo":req.body.refno})
  .toArray(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
})


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
})


//returns an array of jsons of transactions
recordRoutes.route("/transactions").get(function (req, res) {
  let db_connect = dbo.getDb("");

  db_connect
    .collection("Transactions")
    .find({}, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
    response.statusCode = 200;
})
//takes an transac request and checks if the memberid format is correct.
//inputs: regex_format and memberid to check
//output: a response with a message to check validity.
.post(function(req,res){
  let db_connect = dbo.getDb();
  const loyalty_currency_name = req.body.loyalty_currency_name;
  const memberid = req.body.memberid;
  const document = db_connect.collection("MembershipTest").findOne({"Loyalty Currency Name": loyalty_currency_name});
  const regex_format = document["Validation Regex"];
  const valid_check = Validate(regex_format, memberid);
  if(valid_check){
    res.status(200).send("Membership number is ok");
  }
  else{
    res.status(200).send("Membership number does not match format");
  }
});

recordRoutes.route("/transactions/add").post(function (req, res) {
  let db_connect = dbo.getDb("");
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  const RefNo = Math.random();
  let myobj = {
    TransactionDate: today,
    Amount: req.body.amount,
    Status: req.body.status,
    MemberID:req.body.memberid,
    LoyaltyProgramID:req.body.programid,
    Description:"nothing",
    RefNo:RefNo
  };

  db_connect
  .collection("Transactions")
  .insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
  
  response.statusCode = 201;
})

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
    response.statusCode = 201;
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
  response.statusCode(201);
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

/*This section checks if a transaction is complete, and returns the error code to tell the user what went wrong.
List of codes this API will return:
  0000 - success
  0001 - member not found
  0002 - member name mismatch
  0003 - member account closed
  0004 - member account suspended
  0005 - member ineligible for accrual
  0099 - unable to process, please contact
  support for more information
*/
recordRoutes.route("/status").get(async function (req, res) {
  const db_connect = dbo.getDb();
  const memberid = req.body.MemberID;
  const query = { MemberID: memberid };
  const transaction = await db_connect
    .collection("Transactions")
    .findOne(query); // returns the transaction of that member
  const status = transaction.Status;
  switch(status){
    case "0000":  
      res.send("success");
      break;
    case "0001":
      res.send("member not found");
      break;
    case "0002":
      res.send("member name mismatch");
      break;
    case "0003":
      res.send("member account closed");
      break;
    case "0004":
      res.send("member account suspended");
      break;
    case "0005":
      res.send("member ineligible for accrual");
      break;
    case "0099":
      res.send("unable to process, please contact support for more information");
      break;
    default:
      res.send("No known code found, Error?");
      break;

  }});
//   if (status === "0") {
//     res.send("Transaction pending");
//   } else if (status === "1") {
    
//   } else if (status === "2") {
//     res.send("Transaction failed");
//   } else {
//     res.send("Error, Unable to retrieve transaction status");
//   }
// });

module.exports = recordRoutes;

