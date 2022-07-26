const ftp= require("basic-ftp");
//npm install basic-ftp

const mongodb = require("mongodb").MongoClient;
//npm install mongodb

//npm install fast-csv
const fastcsv = require("fast-csv");
const fs = require("fs");

async function getcsv(){
    //generate csv file from database contents
    let url = "mongodb+srv://hith:chun@merntest0.hqr9i9x.mongodb.net/merntest0?retryWrites=true&w=majority";
    const ws = fs.createWriteStream("accrual.csv")
    mongodb.connect(url, 
        {useNewUrlParser: true, useUnifiedTopology:true}, 
        (err,client)=>{
            if (err) throw err;
            client.db("TransferConnect")
            .collection("Transactions")
            .find({})
            .toArray((err,data)=>{
                if(err) throw err;
                console.log(data);
                fastcsv.write(data, {headers:true})
                .on("finish", function(){
                    console.log("success");
                })
                .pipe(ws)
                client.close();
            })
    })
}

async function putaccrual(){
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try{
        await client.access({
            host:"proftp.drivehq.com",
            user:"sutd_2022_c4g9",
            password:"C4g9@sutd1",
        })
        console.log(await client.pwd())
        await client.ensureDir("\\Partner1")
        
        console.log(await client.list())
        //TODO: upload accrual csv from server to ftp server
        // to upload
        // await client.uploadFrom()
        // to download
        // await client.downloadTo()
    } catch (err){
        console.log(err);
    }
    client.close()
}

getcsv()