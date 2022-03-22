const Restaurant = require('../../Restaurant/model')
const getMenu = async(req,res) => {
    const restro = await Restaurant.find({_id:req.params.id});
    res.send( restro.menu );
}
module.exports = {
    getMenu
}