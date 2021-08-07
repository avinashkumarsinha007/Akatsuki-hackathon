const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    class: { type: String, required: false },
    paperNo: { type: Number, required: false },
    paper:[{ type: Object, required: false }],
}, {
    timestamps: true,
    versionKey: false
});



module.exports = mongoose.model("paper", paperSchema);
