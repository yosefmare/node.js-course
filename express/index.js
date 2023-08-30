const express = require('express');
const dotenv = require('dotenv')
const app = express()
const mongoose = require('mongoose')
const MyRouter = require("./class/controller")
dotenv.config({path: './config.env'})

const myRoots = new MyRouter()
mongoose.connect("mongodb+srv://yosef-mare:Yosef108s@cluster0.mwyemb3.mongodb.net/personsDB").then(() => console.log('connection to database successfully'))
.catch((error) => console.log(error))
app.use(express.json())

app.use('/', myRoots.router);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

