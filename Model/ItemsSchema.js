const mongoose = require("mongoose");

const ItemsSchema = mongoose.Schema({
  Name: String,
  Description: String,
  Starting_Price:Number,
  Current_Price: Number,
  ItemImage:String,
  End_time:Date,
  created_at:{type:Date, default:new Date()}
});
module.exports = mongoose.model("Item", ItemsSchema);