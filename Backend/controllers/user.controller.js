const express = require("express");
const User = require("../models/user.model");
const upload = require("../middleware/upload")
const router = express.Router();
const protect = require("../middleware/protect");

router.get("/", async (req, res) => {
    try
    {
        const user = await User.find().lean().exec();
        res.status(200).json({ user: user });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

router.get("/:id", async (req, res) => {
    try
    {
        const user = await User.findById(req.params.id).lean().exec();
        res.status(200).json({ user: user });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

router.patch("/:id",protect,upload.single("Profile_url"), async (req, res) => {
    try
    {
        const user = await User.findByIdAndUpdate(req.params.id, {
            email: req.body.email,
            first_name: req.body.first_name,
            Profile_url: req.file.path,
            last_name :req.body.last_name,
            password: req.body.password,
        },{new:true})
        res.status(201).json({ user: user });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

router.delete("/:id", async (req, res) => {
    try
    {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(201).json({ user: user });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});


module.exports = router;
