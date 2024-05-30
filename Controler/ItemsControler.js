const Item = require("../Model/ItemsSchema");

exports.addItem = (req, res) => {
  const item = new Item({
    Name: req.body.Name,
    Description: req.body.Description,
    Starting_Price: req.body.Starting_Price,
    Current_Price: req.body.Current_Price,
    ItemImage: req.body.ItemImage,
    End_time: req.body.End_time,
  });

  item
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.getAllItem = (req, res) => {
  Item.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.updateItemPrice = (req, res) => {
  Item.findByIdAndUpdate(
    { _id: req.body.iid },
    { Starting_Price: req.body.updatePrice },
    { new: true }
  )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.deleteItem = (req, res) => {
  Item.deleteOne({ _id: req.body.iid })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getPaginateItems = async (req, res) => {
  let page = req.query.page || 1;
  let limit = req.query.limit || 3;

  let skip = (page - 1) * limit;
  try {
    const items = await Item.find().skip(skip).limit(limit);
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json(error);
  }
};
