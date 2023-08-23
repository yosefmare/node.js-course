const express = require('express');
const dotenv = require('dotenv')
const app = express()
const MyRouter = require("./class/my-roots")
dotenv.config({path: './config.env'})

const myRoots = new MyRouter()

app.use('/', myRoots.router);
app.use('/users', myRoots.router);
app.use('/businesses', myRoots.router);
app.use('/schools', myRoots.router);


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

