const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  MobileNo: Number,
  role: { type: String, default: "user" },
  Password: String,
  Created_at: { type: Date, default: new Date() },
});
UserSchema.pre("save", async function (next) {
  try {
    if (this.isModified(" Password")) {
      const salt = await bcrypt.genSalt(10);
      this.Password = await bcrypt.hash(this.Password, salt);
    }
    next();
  } catch (error) {
    next(error);
  }
});
module.exports = mongoose.model("UserDetails", UserSchema);
