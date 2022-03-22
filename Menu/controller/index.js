const Restaurant = require('../../Restaurant/model')
const getMenu = async(req,res) => {
    const restro = await Restaurant.find({_id:req.params.id});
    res.status(200).send({menu: restro.menu} );
}
module.exports = {
    getMenu
}