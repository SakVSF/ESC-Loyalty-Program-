const url =
"mongodb+srv://hith:chun@merntest0.hqr9i9x.mongodb.net/merntest0?retryWrites=true&w=majority";
const mongodb = require("mongodb").MongoClient;

function fuzz(buf) {
  addTransaction(buf)
  getTransaction(buf);
  deleteTransaction(buf)
  updateTransaction(buf)

  
}
// CREATE
const addTransaction = (status,memberid,amount,username) => {
  var obj = {"MemberID":memberid,"Status":status,"Amount":amount,"Username":username};
  mongodb.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        if (err) throw err;
        client
            .db("TransferConnect")
            .collection("Fuzzingtest").insertOne(obj, (err, res) => {
    if (err) throw err
  })
})
}
//READ
const getTransaction = (refno)=>
{ query = {"RefNo":refno.toString()}
  let res = mongodb.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        if (err) throw err;
        client
            .db("TransferConnect")
            .collection("Fuzzingtest").find(query
            ).toArray((err,res)=>
            {
              if (err) throw err
            });
      
})}

//UPDATE
const updateTransaction = (refno)=>
{  const updates = {
  $set: {
    Refno: refno
  }
};
  let res = mongodb.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        if (err) throw err;
        client
            .db("TransferConnect")
            .collection("Fuzzingtest").updateOne({},updates)
            
      
})}

//DELETE
const deleteTransaction = (temp)=>
{  
  let res = mongodb.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        if (err) throw err;
        client
            .db("TransferConnect")
            .collection("Fuzzingtest").deleteOne({})
 
      
})}
module.exports = {
  fuzz
};