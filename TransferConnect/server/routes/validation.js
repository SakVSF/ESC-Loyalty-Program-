const mongodb = require("mongodb").MongoClient;

function Validate(regexstr, input) {
  //returns true if input conforms to regex specified by LP, else false
  var isValid = true;
  try {
    regex = new RegExp(regexstr);
    return regex.test(input);
  } catch (e) {
    isValid = false;
    console.log("Regex initialization failed, check regex.");
    return false;
  }
}

async function memberValidate(membershipid) {
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
}

module.exports = { Validate };
module.exports = { memberValidate };
