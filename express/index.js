const express = require('express');
const dotenv = require('dotenv')
const app = express()
const MyRouter = require("./class/my-roots")
dotenv.config({path: './config.env'})

const myRoots = new MyRouter()
app.use(express.json())

app.use('/', myRoots.router);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

