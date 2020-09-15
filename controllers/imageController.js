const Image = require("../models/Image")
const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })



const image_store = (upload.any(),(req, res) => {
 

    console.log("req-files",req.files)



})



module.exports = {
    image_store 
}