const express = require("express");
const app = express();
const cors = require("cors");
const schedule = require('node-schedule');
const repeated = require("./routes/accrual")
require("dotenv").config({ path: "./config.env" });
const port = 5001;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
  repeated.timedGetAccrual();
  repeated.timedPutAccrual();

});

module.exports = app;