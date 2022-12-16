const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: {type:String,required:true },

    email: {type:String,required:true },
    password: {type:String,required:true },

    balance:{type:Number,default:0},
    image : {type:String,default:"https://res.cloudinary.com/dugewmeeh/image/upload/v1670743970/mawi%20cuisine/blank-profile-picture-973460_1280_pgdqwd.png"},
    admin: {type:Boolean,default:false},
   
  })
);

module.exports = User;