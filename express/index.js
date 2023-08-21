const express = require('express');
const dotenv = require('dotenv')
const app = express()
dotenv.config({path: './config.env'})

app.get('/', (req,res) => {
    res.send(`hello to the server with nodemon🙃🙃🙃`)
})


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

// console.log(process.env.PORT);