const mongoose = require("mongoose");
mongoose.Promise = global.Promise;




db.user = require("./user.model");

db.role = require("./cart.model");
db.patient = require("./product.model");

db.ROLES = ["user", "Doctor", "Receptionist"];

module.exports = db;
