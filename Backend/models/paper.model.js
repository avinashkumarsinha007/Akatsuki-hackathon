const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema({
    roll_no: { type: Number, required: true },
    class: { type: String, required: false },
    profile_pict: { type: String, required: false },
    user :{ type: mongoose.Schema.Types.ObjectId, ref:"user", required: false },
    date: { type: String, required: true },
    time:{type:String,required:true},
    token:{type:String,required:true},
}, {
    timestamps: true,
    versionKey: false
});



module.exports = mongoose.model("paper", paperSchema);
