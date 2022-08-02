const { dir, assert } = require("console");
//npm install basic-ftp
const mongodb = require("mongodb").MongoClient;
//npm install mongodb

//npm install fast-csv
const fastcsv = require("fast-csv");
const fs = require("fs");
const { config } = require("process");
const { setFlagsFromString } = require("v8");

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
                    console.log("csv file created.");
                })
                .pipe(ws)
                client.close();
            })
    })
}

async function putaccrual(){

    let Client = require ("ssh2-sftp-client");
    //npm install ssh2-sftp-client
    let sftp = new Client();
    const config = {
        host:"proftp.drivehq.com",
        user:"sutd_2022_c4g9",
        password:"C4g9@sutd1",
        port : 22, //21 for FTP, 22 for SFTP 990 for FTPS
    };
    await sftp.connect(config).then(async () => {
        try
        {
            src = "accrual.csv"; //local path
            //default folder path :  \\melvrickgoh\sutd_2022_c4g9
            d = "\\Partner1/accrual.csv"; //<dir>/<filename> of sftp (remote path)
            console.log("uploading.....");
            await sftp.put(src,d);
            console.log("success");
        }
        catch(err) {console.log("failed \n",err);}
    }).finally(() => {sftp.end();});
}

async function getAccrual(){
    let Client = require ("ssh2-sftp-client");
    //npm install ssh2-sftp-client
    let sftp = new Client();
    const config = {
        host:"proftp.drivehq.com",
        user:"sutd_2022_c4g9",
        password:"C4g9@sutd1",
        port : 22, //21 for FTP, 22 for SFTP 990 for FTPS
        //dir : "\\melvrickgoh\sutd_2022_c4g9"
    };
    await sftp.connect(config).then(async () => {
        try
        {
            //src = "/Users/limboonhanmelvin/Downloads/ESC-Loyalty-Program-/TransferConnect/server/routes/accrual.csv"; //local path
            //default folder path :  \\melvrickgoh\sutd_2022_c4g9
            d = "\\Partner1/accrual.csv"; //<dir>/<filename> of sftp (remote path)
            console.log("downloading.....");
            await sftp.get(d,"accrual.csv");
            console.log("success");
        }
        catch(err) {console.log("failed \n",err);}
    }).finally(() => {sftp.end();});
}
//getcsv()
//putaccrual()
getAccrual()