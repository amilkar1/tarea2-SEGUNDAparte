const mongoose = require("./connect");
STUDENTSCHEMA = {
  name:         String,
  lastname:     String,
  address:      String,
  age:          Number,
  nickname:     String,
  password:     String,
  registerDate: Date,
  updateDate:   Date
}
const USER = mongoose.model("user", STUDENTSCHEMA);
module.exports = USER;
