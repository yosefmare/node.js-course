const express = require('express')
const cors = require('cors')
const dbConnection = require('./config/DB-connection')
const  MyRoots = require('./router/roots')
const  PersonRoots = require('./router/person-root')
const personData = require("./BLL/create-person-obj")


const router = new MyRoots
const router2 = new PersonRoots

dbConnection()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/", router.router);
app.use("/persons", router2.router);

app.listen(8000, () => {
    console.log("server running!");
})

async function show (id){
    const data = await personData.createPersonObj(id)
console.log(data);
}

show(1)