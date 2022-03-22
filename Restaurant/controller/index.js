var Restaurant = require("../model/index");
const getRestaurant = (req, res) => {
  console.log(req.user);
  Restaurant.find({}).exec((err, restaurants) => {
    if (err) {
      res.status(500).send({
        message: err,
      });
      return;
    }
    if (!restaurants) {
      return res.status(404).send({
        message: "Restaurants Not found.",
      });
    }
    const restaurantData = restaurants;
    res.send(restaurantData);
  });
};
module.exports = {
  getRestaurant,
};
