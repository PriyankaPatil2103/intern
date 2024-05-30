const mongoose = require("mongoose");

const NotificationSchema = mongoose.Schema({
  UserId:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
  Message:String,
  IsRead:{type:String, default:"false"},
  created_at:{type:Date, default:new Date()} 

});
module.exports = mongoose.model("Notify", NotificationSchema);