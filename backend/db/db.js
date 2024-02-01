const mongoose = require("mongoose");
const MONGODBURL = require("../../utils/urls");
mongoose.connect(MONGODBURL.URL);

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
});
const AccountSchema = new mongoose.Schema({
  username: { type: String, ref: "User", required: true },
  balance: {
    type: Number,
    required: true,
  },
});
const User = mongoose.model("User", UserSchema);
const Account = mongoose.model("Account", AccountSchema);
module.exports = { User, Account };
