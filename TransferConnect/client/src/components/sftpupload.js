import React from "react";

let Client = require('ssh2-sftp-client');
let sftp = new Client();

sftp.connect({
    host:'127.0.0.1',
    port:'8080',
    username:'sutd_2022_c4g9',
    password:'C4g9@sutd1'
}).then(() => {
    return sftp.list('./Accrual');
}).then(data => {
    console.log(data, 'data info');
}).catch(err => {
    console.log(err, 'Error!');
})