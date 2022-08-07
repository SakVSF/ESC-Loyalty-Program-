# BankApp
Bank App for Loyalty Program Marketplace (50.003)
# BankApp Launch Guide

## Installation
2 options for installation are available below, choose either one to proceed.
a. From command line: ```git clone https://github.com/SakVSF/ESC-Loyalty-Program-``` and proceed with remaining init procedures
b. From github website: Download as ZIP, unzip the folders to destination and proceed with remaining init procedures

```
npm install
npm install axios
```

## Launching BankApp
### From command line: 
1. Set up
```
cd BankApp
npm start
```
OR 
2. Set up using build
```
cd BankApp
npm run build
serve -s build
```
Wait for the browser to launch localhost:3000 

## NOTE: use below credentials to sign in to the app:
```
username: jasonpeng
password: hello123
```

For those debugging and unfamiliar with what to put in bankapp follow this route: 
sign in(using above credentials) > click "View Loyalty Programs" > go to Gojet Points and click "Transfer Miles" > put in following details in form :
```
username : jasonpeng
memberid: 2153642985
confirm_memberid : 2153642985
```
press ok to all window alerts (they are put there for debugging ) > if valid, page will go to transfer-miles>  enter number of points to transfer(e.g. 200/300) > currently error in POST to transactions/add 
