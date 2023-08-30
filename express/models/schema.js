const mongoose = require('mongoose')
const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const UsersModel = mongoose.model('Users', User)
module.exports = UsersModel

