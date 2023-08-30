const mongoose = require('mongoose')

const moveisSchema = new mongoose.Schema({
    name: String,
    director: String,
    premieredYear: Number
}, {
    versionKey: false
})

const MoveisModel = mongoose.model("moveis", moveisSchema)

module.exports = MoveisModel