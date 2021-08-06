const path = require("path")
const multer = require("multer");

let storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null,"./uploads")
    }
    ,
    filename: function (req, file, callBack) {
        callBack(null,(Math.random()*100000).toString()+"-"+file.originalname)
    }
})

function fileFilter(req,file,cb) {
    if (file.mimetype == "image/jpeg" ||file.mimetype == "image/png")
    {
        cb(null,true)
    }
    else
    {
        cb(null,false)
    }
}
module.exports =multer ({
    storage: storage,
    limits: {
        fileSize: 1024 * 5 * 1224 ,
    },
    fileFilter:fileFilter
})