const app = require("./index");

const connect = require("../config/db");

app.listen(4000, async (req, res) => {
    await connect();
    console.log("hello I am alive 4000")
})