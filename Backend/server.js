const server = require("./src/index");
const env = require('dotenv')
const connect = require("./config/db");

server.listen(process.env.PORT || 4000, async (req, res) => {
    console.log(process.env.PORT)
    await connect();
    console.log("hello I am alive 4000")
})