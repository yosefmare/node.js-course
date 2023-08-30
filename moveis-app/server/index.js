const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const MyController = require('./class/controller')
const app = express()

const router = new MyController()
// connect to DB
mongoose.connect("mongodb+srv://yosef-mare:Yosef108s@cluster0.mwyemb3.mongodb.net/moveisDB")
    .then(() => console.log("DB connect successfully"))
    .catch((error) => console.log("connetion filed", error))

app.use(cors())
app.use(express.json())

app.use("/", router.router)

app.listen(8000, () => {
    console.log("server running!!!");
})