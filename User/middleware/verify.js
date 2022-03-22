const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Restaurant = require("../../Restaurant/model");

const verifyToken = async (req, res, next) => {
    console.log("Verifying")
    console.log(req.headers.authorization)
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET, function (err, decode) {
      if (err) req.user = undefined;
      User.findOne({
          _id: decode.id
        })
        .exec(async(err, user) => {
          if (err) {
            res.status(500)
              .send({
                message: err
              });
          } else {
            req.user = user;
            if(user.role == 'Admin'){
              req.restaurantData = await Restaurant.find({owner:user.id})
            }
            next();
          }
        })

  
    });
  } else {
    req.user = undefined;
    next();
  }
};
module.exports = verifyToken;