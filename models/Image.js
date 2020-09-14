const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    file: {
        type: Buffer,
        contentType: String
    }
})

ImageSchema.pre('save', (next) => {
    console.log("stuff")
    console.log("a image is about was saved", this)

    next()
})

ImageSchema.post('save', (doc, next) => {
    console.log("stuff")
    console.log("a image was saved", doc)
    next()
})

module.exports = Image = mongoose.model("image", ImageSchema)