const getMenu = (req,res) => {
    console.log(req.user)
    const menu = [
  
        {
            id : 1,
            name : "Paneer tikka",
            image : "https://thumbs.dreamstime.com/b/tandoori-paneer-tikka-marinated-cheese-cubes-spices-yogurt-indian-dish-188315564.jpg" ,
            price : "150",
            category :"veg"
        },
        {
            id : 2,
            name : "kadhai Paneer",
            image : "https://www.cookoverheels.com/wp-content/uploads/2020/03/30-min-Dhaba-Style-Kadhai-Paneer.jpg" ,
            price : "250",
            category :"veg"
        },
        {
            id : 3,
            name : "Paneer Angara",
            image : "http://cdn.shopify.com/s/files/1/0341/8000/6023/products/paneer-pakwangali_061319061918_1200x1200.jpg?v=1600355651" ,
            price : "280",
            category :"veg"
        },
        {
            id : 4,
            name : "manchurian ",
            image : "https://www.cookshideout.com/wp-content/uploads/2014/11/Veg-Manchurian-Low-Fat-FI.jpg" ,
            price : "100",
            category :"veg"
        },
        {
            id : 5,
            name : "Gobhi masala",
            image : "https://i.ytimg.com/vi/73Eg9HSWokg/maxresdefault.jpg" ,
            price : "120",
            category :"veg"
        },
        {
            id : 6,
            name : "Bhindi fry",
            image : "https://i.ytimg.com/vi/WAZsKC13MNM/maxresdefault.jpg" ,
            price : "80",
            category :"veg"
        },
    


        {
            id : 7,
            name : "Chicken tikka",
            image : "https://www.whiskaffair.com/wp-content/uploads/2020/06/Chicken-Tikka-2-3.jpg" ,
            price : "250",
            category : "NonVeg"
        },
        {
            id : 8,
            name : "chicken kadhai ",
            image : "https://www.odisakitchen.com/wp-content/uploads/2019/01/CK-2.jpg" ,
            price : "300",
            category : "NonVeg"
        },
        {
            id : 9,
            name : "chicken Angara",
            image : "https://i.ytimg.com/vi/iaL_3TU3hgY/maxresdefault.jpg" ,
            price : "280",
            category : "NonVeg"
        },
        {
            id : 10,
            name : "chickesn Kolapuri",
            image : "https://2.bp.blogspot.com/-xOXPil-lR50/WNLMv6n9SKI/AAAAAAAAHLE/4LK3QwwNDiQ9-0pk230Ng32XxD3sM0ptACLcB/s1600/000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000A0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.jpg" ,
            price : "300",
            category : "NonVeg"
        },
        {
            id : 11,
            name : "Chicken hyderabadi",
            image : "https://img-global.cpcdn.com/recipes/cde0f5d52a23368e/1200x630cq70/photo.jpg" ,
            price : "120",
            category : "NonVeg"
        },
        {
            id : 12,
            name : "Biryani",
            image : "https://st.depositphotos.com/3147737/4982/i/950/depositphotos_49826809-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg" ,
            price : "250",
            category : "NonVeg"
        },
    ]


    res.send( menu );
}
module.exports = {
    getMenu
}