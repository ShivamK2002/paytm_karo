const mongoose = require("mongoose");
const MONGODBURL = require("../../utils/urls");
mongoose.connect(MONGODBURL.URL);

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
