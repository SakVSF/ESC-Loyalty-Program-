const { MongoClient } = require("mongodb");
const url =
"mongodb+srv://hith:chun@merntest0.hqr9i9x.mongodb.net/merntest0?retryWrites=true&w=majority";
const mongodb = require("mongodb").MongoClient;

//https://bobbyhadz.com/blog/javascript-read-file-into-array


//TODO: update db from input membership details
//TODO: update db using exchange rate

//TODO: update db from handback file
// async function UpdateDB()
// {   
//     var TransactionArray = [];
//     var transactions = GetCSVArray("accrual.csv"); // handback.csv
//     for (var i =1; i < transactions.length; i++) // nested arrays of [memberID, points]
//     {TransactionArray.push([transactions[i].split(",")[9] , transactions[i].split(",")[6]])}
    
//     //console.log(TransactionArray)
//     mongodb.connect(url,
//         { useNewUrlParser: true, useUnifiedTopology: true },
//         (err, client) => {
//             if (err) throw err;
//             const collection = client.db("TransferConnect").collection("Members");
//             collection.find({})
//             .toArray((err, handback) => {
//                 if (err) throw err;
//                 handback.forEach(async (member) => {
//                     for (var j = 0; j < TransactionArray.length; j++) {
//                         if (member.MemberID == TransactionArray[j][0]) {
//                             //console.log(member.MemberID)
//                             //console.log(TransactionArray[j][0])
//                             var output = SubPoints(member.PointsAvailable, TransactionArray[j][1]);
//                             console.log(`${member.PointsAvailable} - ${TransactionArray[j][1]} = ${output}`);
//                         }
//                             await collection.updateOne({ "MemberID": member.MemberID },
//                                 { $set: { "PointsAvailable": `${output}` } });
//                             console.log(
//                                 `updated points for member : ${member.FirstName}, member ID : ${member.MemberID}`);
//                         }
//                     });
//                     client.close();
//                 });

//         }) 
// }

// //TODO: update db from handback file
// async function UpdateDBv2()
// {   
//     var TransactionArray = [];
//     var transactions = GetCSVArray("handback.csv"); // handback.csv
//     for (var i =1; i < transactions.length; i++) // nested arrays of [memberID, points]
//     {TransactionArray.push([transactions[i].split(",")[9] , transactions[i].split(",")[6]])}
    
//     client = new MongoClient(url)
//     await client.connect();
//     const db = client.db("TransferConnect");
//     const collection = db.collection("Members");

//     let members = await collection.find().toArray();

//     members.forEach(async (member) => {
//         for (var j = 0; j < TransactionArray.length; j++) 
//         {
//             if (member.MemberID == TransactionArray[j][0]) 
//             {
//                 var output = SubPoints(member.PointsAvailable, TransactionArray[j][1]); //a-b
//                 console.log(`${member.PointsAvailable} - ${TransactionArray[j][1]} = ${output}`);
//                 await collection.updateOne({ "MemberID" : member.MemberID },
//                     {$set: {"PointsAvailable" : `${output}` } });
//                 console.log(`updated points for member : ${member.FirstName}, member ID : ${member.MemberID}`);
//             }
           
//         }
//     })
//     client.close();
// }

//TODO: clear db
async function ClearTransaction()
{
    client = new MongoClient(url)
    await client.connect();
    const db = client.db("TransferConnect");
    const collection = db.collection("Transactions");
    //await collection.insertMany(newcollection);
    //const collection = client.db("TransferConnect").collection("TEST");
    //await collection.insertMany(newcollection)

    await collection.drop();
    await db.createCollection("Transactions");
    console.log("Collection Cleared.")

    client.close();
}

function AddPoints(a,b)
{return a - (-b);}
function SubPoints(a,b)
{return a-b}

function GetCSVArray(filename) 
{
    const {readFileSync, promises: fsPromises} = require('fs');
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split('\n');
    return arr;
}

//console.log(GetCSVArray("accrual.csv"))
//UpdateDBv2();
async function test()
{
    var newcollection = [
        {student_id : 1, average_grade : 0, full_name : "A first", grades : [], term : 0 },
        {student_id : 2, average_grade : 0, full_name : "B second ", grades : [], term : 0 },
        {student_id : 3, average_grade : 0, full_name : "C third ", grades : [], term : 0 },
        {student_id : 4, average_grade : 0, full_name : "D Fourth", grades : [], term : 0 },
        {student_id : 5, average_grade : 0, full_name : "E Fifth", grades : [], term : 0 },
        {student_id : 6, average_grade : 0, full_name : "F Sixth", grades : [], term : 0 },
        {student_id : 7, average_grade : 0, full_name : "G Seventh", grades : [], term : 0 },
    ];
    client = new MongoClient(url)
    await client.connect();
    const db = client.db("TransferConnect");
    const collection = db.collection("TEST");
    //await collection.insertMany(newcollection);
    //const collection = client.db("TransferConnect").collection("TEST");
    //await collection.insertMany(newcollection)


    await collection.drop();
    await db.createCollection("TEST");
    client.close();
}
//test()
ClearTransaction();