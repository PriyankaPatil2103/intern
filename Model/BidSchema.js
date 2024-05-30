const mongoose = require("mongoose");

const BidSchema = mongoose.Schema({
  ItemId:{type:mongoose.Schema.Types.ObjectId, ref:"Item"},
  UserId:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
  Bidamount: Number,
  created_at:{type:Date, default:new Date()} 

});
module.exports = mongoose.model("Bid", BidSchema);