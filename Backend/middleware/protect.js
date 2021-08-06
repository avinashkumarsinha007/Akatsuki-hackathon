const jwt = require("jsonwebtoken");
require("dotenv").config();
const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token,process.env.JWT_API_KEY,(err, payload) => {
            if (err) return reject(err);
            return resolve(payload);
        })
    })
}

const protect = async (req, res, next) => {
    if (!req.body.token) return res.status(400).send({ status: "failed", token: "access denied token not found" });
    const token = req.body.token;
    const payload =await verifyToken(token);
    if (!payload) return res.status(400).send({ status: "failed", token: "access denied token not found" });
    req.user = payload;
    next();
}

module.exports = protect;