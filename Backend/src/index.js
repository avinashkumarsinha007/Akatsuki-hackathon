const express = require("express");
const cors = require("cors");
const app = express();

const userController = require("../controllers/user.controller");
const { register, login } = require("../controllers/auth.controller");
const registerExamController = require("../controllers/exam.controller");
const paperController = require("../controllers/paper.controller");
// const upload = require("../middleware/upload");
app.use(cors())
app.use(express.json());
app.use("/uploads",express.static("uploads"))
app.use("/users/register", register);
app.use("/login", login);
app.use('/users', userController);
app.use("/exams", registerExamController);
app.use("/papers",paperController)
module.exports = app;