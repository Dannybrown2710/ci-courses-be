var Restaurant = require("../model/index");
const getRestaurant = (req, res) => {
  console.log(req.user);
  if(req.session.restaurantData){
    res.status(200).send(req.session.restaurantData);
    return;
  }
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

const editRestaurant = async (req, res) => {
  console.log(req.session);
  if(req.session.user && req.session.user.role === 'Admin'){
    const user = req.session.user;
    const restaurant = await Restaurant.findOne({owner: user.id});
    console.log(restaurant);
    if(!restaurant){
      res.status(503).send({message:"Restaurant not found"});
      return;
    }else{
      for(let key of Object.keys(req.body)){
        restaurant[key] = req.body[key];
      }
      restaurant.save();
      res.status(200).send({message:"Restaurant updated successfully"});
    }
  } else {
    res.status(403).send({message: 'Unauthorised'})
  }
}


const addMenuItemToRestaurant = async (req, res) => {
  console.log(req.session);
  if(req.session.user && req.session.user.role === 'Admin'){
    const user = req.session.user;
    const restaurant = await Restaurant.findOne({owner: user.id});
    console.log(restaurant);
    if(!restaurant){
      res.status(503).send({message:"Restaurant not found"});
      return;
    }else{
      restaurant.menu.push(req.body)
      restaurant.save();
      res.status(200).send({message:"Menu Item updated successfully"});
    }
  } else {
    res.status(403).send({message: 'Unauthorised'})
  }
}


const editMenuItemToRestaurant = async (req, res) => {
  console.log(req.session);
  if(req.session.user && req.session.user.role === 'Admin'){
    const user = req.session.user;
    const restaurant = await Restaurant.updateOne({owner: user.id,"menu._id":req.body._id},{$set:{"menu.$":req.body}});
    console.log(restaurant);
    if(!restaurant){
      res.status(503).send({message:"Restaurant not found"});
      return;
    }else{
      res.status(200).send({message:"Restaurant updated successfully"});
    }
  } else {
    res.status(403).send({message: 'Unauthorised'})
  }
}


const deleteMenuItemToRestaurant = async (req, res) => {
  console.log(req.session);
  if(req.session.user && req.session.user.role === 'Admin'){
    const user = req.session.user;
    const restaurant = await Restaurant.updateOne({owner: user.id},{$pull:{"menu":{_id:req.body.id}}});
    console.log(restaurant);
    if(!restaurant){
      res.status(503).send({message:"Restaurant not found"});
      return;
    }else{
      res.status(200).send({message:"Restaurant updated successfully"});
    }
  } else {
    res.status(403).send({message: 'Unauthorised'})
  }
}





module.exports = {
  getRestaurant,
  editRestaurant,
  addMenuItemToRestaurant,
  editMenuItemToRestaurant,
  deleteMenuItemToRestaurant
};
