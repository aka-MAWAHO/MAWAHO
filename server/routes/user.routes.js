const userRouter = require("express").Router();
var userController = require("../controller/user");

// TODO: Create route handlers for each of the six methods in userController

userRouter.post("/signUp", userController.signUp);
userRouter.post("/login", userController.login);
userRouter.get("/getAll", userController.getget);
userRouter.get("/:email", userController.findOneUser);
// userRouter.get("/accessRessource" , userController.accessResource);

module.exports = userRouter;
