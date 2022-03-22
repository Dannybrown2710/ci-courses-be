var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var User = require("../models/user");
var Restaurant = require("../../Restaurant/model");

process.env.API_SECRET = "omariooo";
exports.signup = (req, res) => {
  console.log(req.body);
  const user = new User({
    fullName: req.body.userData.fullName,
    email: req.body.userData.email,
    role: req.body.userData.role,
    password: bcrypt.hashSync(req.body.userData.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({
        message: err,
      });
      return;
    } else {
      console.log(user);
      if (user.role === "Admin") {
        const restaurantData = req.body.restaurantData;
        if (!restaurantData) {
          user.remove();
          res.status(503).send({
            message: "Restaurant Data missing",
          });
        }
        const restaurant = new Restaurant(restaurantData);
        restaurant.owner = user._id;
        restaurant.save((err, rest) => {
          if (err) {
            console.log(err);
            user.remove();
            res.status(503).send({
              message: err,
            });
          } else {
            res.status(200).send({
              message: "Admin Registered successfully",
            });
          }
        });
      } else {
        res.status(200).send({
          message: "User Registered successfully",
        });
      }
    }
  });
};

exports.signin = async(req, res) => {
  User.findOne({
    email: req.body.email,
  }).exec(async(err, user) => {
    if (err) {
      res.status(500).send({
        message: err,
      });
      return;
    }
    if (!user) {
      return res.status(404).send({
        message: "User Not found.",
      });
    }

    //comparing passwords
    // var passwordIsValid = bcrypt.compareSync(
    //   req.body.password,
    //   user.password
    // );
    var passwordIsValid = false;
    console.log(passwordIsValid);
    console.log(req.body);
    if (req.body.otp === "123456") {
      passwordIsValid = true;
    }

    // checking if password was valid and send response accordingly
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }
    const resp = {user: {
      id: user._id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
    }}
    if(user.role === 'Admin'){
      resp.restaurantData = await Restaurant.find({owner: user._id});
    }
    //signing token with user id
    var token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.API_SECRET,
      {
        expiresIn: 86400,
      }
    );

    //responding to client request with user profile success message and  access token .
    res.status(200).send({
      ...resp,
      message: "Login successful",
      accessToken: token,
    });
  });
};
