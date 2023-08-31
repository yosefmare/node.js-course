const express = require('express')
const router = express.Router()
const UsersModel = require("../models/Users")

class MyRoots {
    constructor() {
        this.router = router
        router.get("/users", this.getUsers)
        router.get("/users/query", this.getUsersByQuery)
        router.post("/users", this.create)
    }

    async getUsers(req, res) {
        try {
            const users = await UsersModel.find()
            res.status(200).json(users)
        } catch (error) {
            console.log(error);
            res.status(500).json({massage: "error fetching filed"})
        }
    }
    async getUsersByQuery(req, res) {
        try {
            const exId = req.query.externalId
            const data = await UsersModel.find({ externalId: parseInt(exId) })

                res.status(200).json(data)
        } catch (error){
            console.log(error);
            res.status(500).json({massage: "error fetching filed"})
        }
        
    }


    async create(req, res) {
        try {
            const data = req.body;
            const newData = new UsersModel(data)
            const saveData = await newData.save(newData)
            res.status(201).json({ massage: "created", newData: saveData })
        } catch (error) {
            console.log(error);
            res.status(500)
        }
    }
}

module.exports = MyRoots