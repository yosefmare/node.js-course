const mongoose = require('mongoose')
const personsSchema = new mongoose.Schema({
    externalId: {
        type: Number,
    },
    city:{
        type: String,
        required: true
    },
    country:{
        type:String,
        required: true
    }
}, {versionKey: false})

const UsersModel = mongoose.model("usesrs", personsSchema)
module.exports = UsersModel
