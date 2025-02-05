const { dir, assert } = require("console");
const path = require('path');
const url =
"mongodb+srv://hith:chun@merntest0.hqr9i9x.mongodb.net/merntest0?retryWrites=true&w=majority";
const mongodb = require("mongodb").MongoClient;
//npm install mongodb
const fastcsv = require("fast-csv");
//npm install fast-csv
const fs = require("fs");

const { config } = require("process");
const { setFlagsFromString } = require("v8");
const schedule = require('node-schedule');
var today = new Date().toLocaleDateString();
var YYYYMMDD =
    today.substring(6, 10) + today.substring(3, 5) + today.substring(0, 2);


async function getcsv() {
    //generate csv file from database contents

    const ws = fs.createWriteStream("accrual.csv");
    mongodb.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, client) => {
            if (err) throw err;
            client
                .db("TransferConnect")
                .collection("Transactions")
                .find({Status: "1111"})
                .toArray((err, data) => {
                    if (err) throw err;
                    //console.log(data);
                    fastcsv
                        .write(data, { headers: true })
                        .on("finish", function () {
                            console.log("csv file created.");
                        })
                        .pipe(ws);
                    client.close();
                });
        }
    );
}

async function putaccrual(partner, getcsv) {
    //run getcsv first, to ensure correct ordering
    getcsv();
    //put an accrual file into sftp server
    let Client = require("ssh2-sftp-client");
    //npm install ssh2-sftp-client
    let sftp = new Client();
    const config = {
        host: "proftp.drivehq.com",
        user: "sutd_2022_c4g9",
        password: "C4g9@sutd1",
        port: 22, //21 for FTP, 22 for SFTP 990 for FTPS
    };
    await sftp
        .connect(config)
        .then(async () => {
            try {
                //console.log(output);
                src = "accrual.csv"; //local path
                //default folder path :  \\melvrickgoh\sutd_2022_c4g9
                d = `\\${partner}/${partner}_${YYYYMMDD}.csv`; //<dir>/<filename> of sftp (remote path)
                console.log("uploading.....");
                await sftp.put(src, d);
                console.log("success");
            } catch (err) {
                console.log("failed \n", err);
            }
        })
        .finally(() => {
            sftp.end();
        });
}

async function getHandback(partner) {
    let Client = require("ssh2-sftp-client");
    //npm install ssh2-sftp-client
    let sftp = new Client();
    const config = {
        host: "proftp.drivehq.com",
        user: "sutd_2022_c4g9",
        password: "C4g9@sutd1",
        port: 22, //21 for FTP, 22 for SFTP 990 for FTPS
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
// times both get and put, the format for the time is as follows:
// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
// I have set the timings to 10am for get accrual and 10.01am for put accrual for now.
function timedGetAccrual(){
    const job = schedule.scheduleJob('00 10 * * *', function(){
        getHandback("Partner1") // this should loop later in the future.
      });
}

async function timedPutAccrual(){
    const job = schedule.scheduleJob('52 * * * *', function(){
        changeTransac();
        putaccrual("Partner1", getcsv) // this should loop later in the future.
      });
}

//TODO: update db from handback file

//TODO: update db from input membership details

//TODO: update db using exchange rate

//TODO: clear db

exports.timedGetAccrual = timedGetAccrual
exports.timedPutAccrual = timedPutAccrual
//test functions
// getcsv()
//putaccrual()
// getAccrual()

//putaccrual("Partner1")
//getHandback("Partner1")
const changeTransac =  ()=>
    {
       
        let refNoList = [];
        fs.createReadStream(path.resolve(__dirname, '','accrual.csv'))
    .pipe(fastcsv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data',  row => refNoList.push(row.RefNo))
    .on('end', async rowCount => {
        for(var i =0;i<refNoList.length;i++)
        { query = {"RefNo":refNoList[i]}
        console.log(query)
        const updates = {
            $set: {
              Status: "0000"
            }
          };
        mongodb.connect(
                url,
                { useNewUrlParser: true, useUnifiedTopology: true },
                (err, client) => {
                    if (err) throw err;
                    client
                        .db("TransferConnect")
                        .collection("Transactions")
                        .updateOne(query, updates, function (err, _result) {
                            if (err) {
                             throw err;
                            } else {
                              console.log("1 document updated");
                            }})});

        }
    })};

    changeTransac();