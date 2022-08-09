# TransferConnect Launch Guide

## Installation
2 options for installation are available below, choose either one to proceed.
a. From command line: ```git clone https://github.com/SakVSF/ESC-Loyalty-Program-``` and proceed with remaining init procedures
b. From github website: Download as ZIP, unzip the folders to destination and proceed with remaining init procedures

## Launching TransferConnect
### From command line: 
1. Set up server using js script
```
cd TransferConnect
cd server
node server.js
```
Expected command line output:
```
Server is running on port: 5000
Successfully connected to MongoDB.
```
2. Set up client using node package manager
```
cd ../client
npm start
```
Wait for the browser to launch localhost:3000 


## To test
cd TransferConnect
cd server
npm test

## Fuzzing test
```cd TransferConnect
sudo npm i -g jsfuzz
cd server cd routes
jsfuzz fuzz.js```
