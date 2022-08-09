const { query, response } = require("express");
const express = require("express");
const { validate } = require("./validation");
const nodemailer = require("nodemailer"); 
const baseURL = "http://localhost:5001"
// recordRoutes is an instance of the express router.

// We use it to define our routes.

// The router will be added as a middleware and will take control of requests starting with path /record.

const recordRoutes = express.Router();

// This will help us connect to the database

const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.

const ObjectId = require("mongodb").ObjectId;

// This api helps to retrieve all the members for signin
recordRoutes.route("/members").get((req, res) => {
    let db_connect = dbo.getDb("merntest0");

    db_connect

        .collection("Members")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This api helps to retrieve all the transaction record given a member id

recordRoutes.route("/getTransaction/MemberID").get((req, res) => {
    let db_connect = dbo.getDb("merntest0");

    db_connect

        .collection("Transactions")
        .find({ MemberID: req.body.memberid })
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

recordRoutes.route("/getTransaction/refno").get((req, res) => {
    const db_connect = dbo.getDb("merntest0");
    const query = { RefNo: req.body.refno };
    db_connect
        .collection("Transactions")
        .findOne(query,function (err, result) {
            if (err) throw err;
            res.json(result);
        }); 
    
});

// This section will help you get a list of all the loyalty programs.
recordRoutes.route("/getTransaction").get( (req,res)=>
{
    let db_connect = dbo.getDb("merntest0");

    db_connect
    .collection("Transactions")
    .find({})
    .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    res.statusCode = 200;
});

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
recordRoutes.route("/transactions").get(function (req, response) {
        const db_connect = dbo.getDb("merntest0");
        db_connect.collection("Transactions").find({}, function (err, result) {
            if (err) throw err;
            response.json(res);
        });
        response.statusCode = 200;
    })
    //takes an transac request and checks if the memberid format is correct.
    //inputs: regex_format and memberid to check
    //output: a response with a message to check validity.
    .post(async function (req, res) {
        const loyalty_currency_name = req.body.loyalty_currency_name;
        const memberid = req.body.memberid;
        const valid_check = await validate(loyalty_currency_name, memberid);
        // console.log(valid_check);
        if (valid_check) {
            res.json({ msg: "Membership number is ok", status: 1 });
        } else {
            res.json({
                msg: "Membership number does not match format",
                status: 0,
            });
        }
    });



    recordRoutes.route("/transactions/add").post(async function (req, res,next) {
        const db_connect = dbo.getDb("merntest0");
        var today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        today = mm + "/" + dd + "/" + yyyy;
        const RefNo = Math.random();
        const myobj = {
            TransactionDate: today,
            Amount: req.body.amount,
            Status: req.body.status,
            MemberID: req.body.memberid,
            Username : req.body.username,
            LoyaltyProgramID: req.body.programid,
            Description: "",
            RefNo: RefNo,
        };

        db_connect.collection("Transactions").insertOne(myobj, function (err, result) {
            if (err) {
              
              throw err;
            } else {
              console.log(`Added a new transaction with Refno ${RefNo}`);
              res.json({"RefNo":RefNo});
            }
          });

          const dbConnect = dbo.getDb();
        const query = { "MemberID": req.body.memberid };
        const result =  await dbConnect.collection("Members").findOne(query);
        let pointsAval = result.PointsAvailable
        const remaining = parseInt(pointsAval) - parseInt(req.body.amount);
        const updates = {
            $set: {
              PointsAvailable: remaining.toString()
            }
          };
        dbConnect
          .collection("Members")
          .updateOne(query, updates, function (err, _result) {
            if (err) {
             throw err;
            } else {
              res.statusCode = 201;
              console.log("1 document updated");
            }
          });


          let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'hungchiayu1@gmail.com',
              pass: 'jqtznryntrbluugg'
            },
            tls:
            {
                rejectUnauthorized:false
            }
          });
          
          let mailOptions = {
            from: 'hungchiayu1@gmail.com',
            to: result.Email,
            subject: 'Transaction made',
            text: `${req.body.amount} points transferred to ${req.body.programid}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });



          res.statusCode = 201;
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
  1111 - awaiting processing
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
    switch (status) {
        case "1111":
          res.send("awaiting processing")
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
            res.send(
                "unable to process, please contact support for more information"
            );
            break;
        default:
            res.send("No known code found, Error?");
            break;
    }
});
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
