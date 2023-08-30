const userModel = require('../models/schema')
const express = require('express')
class MyController {
    constructor() {
        this.router = express.Router()
        this.router.post("/users", this.create)
        this.router.get("/users", this.read)
        this.router.get("/users/:id", this.readById)
        // this.router.patch("/movies/:id", this.update)
        this.router.delete("/users/:id", this.delete)

    }

    async create(req, res) {
        try {
            const objData = req.body;
            const newObj = new userModel(objData);
            const saveObj = await newObj.save(newObj);
            res.status(200).json(saveObj)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: 'creation filed' })
        }
    }

    async readById(req, res) {
        try {
            const id = req.params.id;
            const obj = await userModel.findById(id);
            res.status(200).json(obj)
        } catch (error) {
            console.log(error);
            res.status(404).json({ massage: "not found" })
        }
    }

    async read(req, res) {
        try {
            const obj = await userModel.find()
            res.status(200).json(obj)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "not found" })
        }
    }

    async delete(req, res) {
        const {id} = req.params
        const obj = await userModel.findByIdAndDelete(id)
        if (obj) {
            res.status(200).json({ massage: 'deleted' });
        } else {
            res.status(404).json({ massage: "not found" })
        }
    }

    // async update(req, res) {
    //     const { id } = req.params
    //     const obj = req.body
    //     const newData = await userModel.u
    // }
}

module.exports = MyController