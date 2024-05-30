const Notify=require("../Model/NotificationSchema");

exports.addNotification=(req,res)=>{
    const notify=new Notify({
    UserId:req.body.UserId,
    Message:String,
});
notify
.save()
.then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    res.status(500).send(err);
  });
}
exports.getAllNotification=(req,res)=>{
    Notify.find()
    .populate("UserId")
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}