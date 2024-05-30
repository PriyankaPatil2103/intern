const Bid=require("../Model/BidSchema");

exports.addBid=(req,res)=>{
    const bid=new Bid({
    ItemId:req.body.ItemId,
    UserId:req.body.UserId,
    Bidamount: req.body.Bidamount,
});

bid
.save()
.then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    res.status(500).send(err);
  });
}
exports.getAllBid=(req,res)=>{
    Bid.find()
    .populate("ItemId")
    .populate("UserId")
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}