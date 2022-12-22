const mongoose = require("mongoose");

const Feedback = mongoose.model(
  "Feed",
  new mongoose.Schema({
    name:  {type:String},
    email: {type:String},
    
    image:{type:String},
    message:{type:String}
  }))

module.exports = Feedback;