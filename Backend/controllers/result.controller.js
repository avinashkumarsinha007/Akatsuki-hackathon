const express = require("express");

const Result = require("../models/result.model");
const router = express.Router();


router.post("/", async (req, res) => {
    try
    {
        const result = await Result.create(req.body)
         res.status(200).json({ result: result });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});
router.patch("/:id", async (req, res) => {
    try
    {
        const result = await Result.findByIdAndUpdate(req.params.id, req.params.id,{new:true})
        res.status(201).json({ result: result });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});


router.get("/:userId", async (req, res) => {
    
    try
    {
        const result = await Result.find().populate({
            path: "exam",
            match: { "user": req.params.userId },
        }).lean().exec();
        let result1 = result.filter(el => {
            return el.exam !== null;
        })
      
        res.status(200).json({ result: result1 });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});
router.get("/", async (req, res) => {  
    try
    {
        const result = await Result.find().lean().exec();
        res.status(200).json({ result: result });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

module.exports = router;