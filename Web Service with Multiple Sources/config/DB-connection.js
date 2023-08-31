const mongoose = require('mongoose')

const dbConnection = () => {
    mongoose.connect('mongodb+srv://yosef-mare:Yosef108s@cluster0.mwyemb3.mongodb.net/personsDB').then(() => console.log("DB connection successfully")).catch((error) => console.log(error))
}

module.exports = dbConnection