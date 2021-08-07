const express = require("express");

const Exam = require("../models/exam.model");
const router = express.Router();
const upload = require("../middleware/upload");
const protect = require("../middleware/protect")

router.post("/",upload.single("profile_pict"),protect, async (req, res) => {
    try
    {
        const exam = await Exam.create({
            roll_no: req.body.roll_no,
            class:req.body.class,
            profile_pict:req.file.path ,
            user :req.body.user,
            date: req.body.date,
            time:req.body.time,
            token:req.body.token,
        })
        res.status(200).json({ exam: exam });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});
router.patch("/:id",upload.single("profile_pict"),protect, async (req, res) => {
    try
    {
        const exam = await Exam.findByIdAndUpdate(req.params.id, {
            roll_no: req.body.roll_no,
            class:req.body.class,
            profile_pict:req.file?.path ,
            user :req.body.user,
            date: req.body.date,
            time:req.body.time,
            token:req.body.token,
        },{new:true})
        res.status(201).json({ exam: exam });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});
router.get("/", async (req, res) => {
    try
    {
        const exam = await Exam.find().lean().exec();
        res.status(200).json({ exam: exam });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

router.get("/:id", async (req, res) => {
    try
    {
        const exam = await Exam.findById(req.params.id).lean().exec();
        res.status(200).json({ exam: exam });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

module.exports = router;