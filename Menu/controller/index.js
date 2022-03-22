const Restaurant = require('../../Restaurant/model')
const getMenu = async(req,res) => {
    const restro = await Restaurant.findOne({_id:req.params.restaurantId});
    res.status(200).send({menu: restro.menu} );
}
module.exports = {
    getMenu
}