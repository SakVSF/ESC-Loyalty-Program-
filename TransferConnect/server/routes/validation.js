const { MongoClient } = require("mongodb");

const mongodb = require("mongodb").MongoClient;

//old function, do not use
// function Validate(regexstr, input) {
//     //returns true if input conforms to regex specified by LP, else false
//     var isValid = true;
//     try {
//         regex = new RegExp(regexstr);
//         return regex.test(input);
//     } catch (e) {
//         isValid = false;
//         console.log("Regex initialization failed, check regex.");
//         return false;
//     }
// }
module.exports = {
    validate: async function (loyalty_currency_name, memberid) {
        let url =
            "mongodb+srv://hith:chun@merntest0.hqr9i9x.mongodb.net/merntest0?retryWrites=true&w=majority";
        let query = { "Loyalty Currency Name": loyalty_currency_name };
        let projection = { "Validation Regex": 1 };

        try {
            const client = new MongoClient(url);
            const database = client.db("TransferConnect");
            const collection = database.collection("MembershipTest");

            const regex = await collection.findOne(query, projection);
            console.log(regex["Validation Regex"]);
            client.close();

            var isValid = true;
            try {
                regexstr = new RegExp(regex["Validation Regex"]);
                return regexstr.test(memberid);
            } catch (e) {
                isValid = false;
                console.log("Regex initialization failed, check regex.");
                return false;
            }
        } catch {
            console.log(err);
        }
    },

    memberValidate: async function (membershipid) {
        //returns true if membership id is registered (in database)
        let url =
            "mongodb+srv://hith:chun@merntest0.hqr9i9x.mongodb.net/merntest0?retryWrites=true&w=majority";
        let result = false;
        mongodb.connect(
            url,
            { useNewUrlParser: true, useUnifiedTopology: true },
            (err, client) => {
                if (err) throw err;
                client
                    .db("TransferConnect")
                    .collection("Members")
                    .find({})
                    .toArray((err, data) => {
                        if (err) throw err;
                        if (membershipid in data) {
                            result = true;
                        }
                        client.close();
                    });
            }
        );
        return result;
    },

};



