const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    result: { type: String, required: true },
    grade: { type: String, required: false },
    paperID: { type: mongoose.Schema.Types.ObjectId, ref:"user", required: false },
    total_questions:{ type:Number, required: false },
    total_correct_ans: { type: Number, required: false },
    score: { type: String, required: false },
    passing_score: { type: String, required: false },
    exam:{ type: mongoose.Schema.Types.ObjectId, ref:"exam", required: false },
}, {
    timestamps: true,
    versionKey: false
});



module.exports = mongoose.model("result", resultSchema);
