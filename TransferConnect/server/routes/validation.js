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

module.exports = {Validate};
// console.log(Validate("[0-9]{10}", "1567894820"));