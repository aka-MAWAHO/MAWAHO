const mongoose = require("mongoose");

const Cart = mongoose.model(
  "Cart",
  new mongoose.Schema({
    nameArticle:  {type:String},

    price: {type:Number},
    
    quantity:{type:Number},
    image:{type:String}
  })
);

module.exports = Cart;