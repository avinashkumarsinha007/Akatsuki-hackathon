const express = require("express");

const Paper = require("../models/paper.model");
const router = express.Router();

// for requesting question for a particula class of particular subject
// http://localhost:4000/papers?subject=History&className=10


router.post("/", async (req, res) => {
    try
    {
        const paper = await Paper.create(req.body)
         res.status(200).json({ paper: paper });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});
router.patch("/:id", async (req, res) => {
    try
    {
        const paper = await Paper.findByIdAndUpdate(req.params.id, req.params.id,{new:true})
        res.status(201).json({ paper: paper });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});


router.get("/", async (req, res) => {
    let obj = {};
    let { subject, className } = req.query;
    subject ? obj.subject = subject : null;
    className ? obj.class = className : null;
    let paperNo = Math.ceil(Math.random() * 2);
    obj.paperNo = paperNo;
    
    try
    {
    const paper = await Paper.find(obj).lean().exec();
   
        res.status(200).json( paper );
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});
router.get("/all", async (req, res) => {  
    try
    {
        const paper = await Paper.find().lean().exec();
        res.status(200).json({ paper: paper });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

module.exports = router;