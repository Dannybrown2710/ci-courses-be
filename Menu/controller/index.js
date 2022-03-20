const getMenu = (req,res) => {
    console.log(req.user)
    const menu = ["item1", "item2", "item3"]
    res.send( menu );
}
module.exports = {
    getMenu
}