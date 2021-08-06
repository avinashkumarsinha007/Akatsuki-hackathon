const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

const connect = () => {
    return mongoose.connect(`${process.env.MONGODB_LINK}`, {
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useNewUrlParser:true
    })
}

module.exports = connect;