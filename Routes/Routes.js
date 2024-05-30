const express = require("express");
const router = express.Router();

//User Controler
const UserControler = require("../Controler/UserControler");
router.post("/addUser", UserControler.adduser);
router.get("/getallUser", UserControler.getalluser);
router.post("/dologin", UserControler.dologin);

//Item controler
const ItemsControler = require("../Controler/ItemsControler");
router.post("/additem", ItemsControler.addItem);
router.get("/getallitem", ItemsControler.getAllItem);
router.put("/updateitemprice", ItemsControler.updateItemPrice);
router.delete("/deleteitem", ItemsControler.deleteItem);
router.get("/getpaginate", ItemsControler.getPaginateItems);

//Bid Controler
const BidControler = require("../Controler/BidControler");
router.post("/addbid", BidControler.addBid);
router.get("/getallbid", BidControler.getAllBid);

//notification controler
const NotificationControler = require("../Controler/NotificationControler");
router.post("/addnotification", NotificationControler.addNotification);
router.get("/getallnotification", NotificationControler.getAllNotification);

module.exports = router;
