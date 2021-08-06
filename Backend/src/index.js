const express = require("express");

const app = express();

const userController = require("../controllers/user.controller");
const { register, login } = require("../controllers/auth.controller");
const upload = require("../middleware/upload")
app.use(express.json());
app.use("/uploads",express.static("uploads"))
app.use("/users/register",upload.single("Profile_url"), register);
app.use("/login", login);
app.use('/users', userController);
module.exports = app;