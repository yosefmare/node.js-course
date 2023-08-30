const express = require('express')
const router = express.Router()
const MoveisModel = require('../schemas/schema')
class MyController {
    constructor() {
        this.router = router;
        router.post("/moveis", this.create)
        router.get("/moveis", this.getData)
        router.get("/moveis/:id", this.getDataById)
        router.patch("/moveis/:id", this.update)
        router.delete("/moveis/:id", this.delete)
    }

    async create(req, res) {
        try {
            const data = req.body
            const newData = new MoveisModel(data)
            const saveData = await newData.save(newData)
            res.status(200).json(saveData)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "creation filed" })
        }
    }

    async getData(req, res) {
        try {
            const data = await MoveisModel.find()
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "Error fetching filed" })
        }
    }

    async getDataById(req, res) {
        try {
            const { id } = req.params
            const data = await MoveisModel.findById(id)

            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ massage: "not found" })

            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "Error fetching filed" })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params
            const newData = req.body
            const data = await MoveisModel.findByIdAndUpdate(id, newData)

            if (data) {
                res.status(200).json({ massage: "data updated", Data: newData })
            } else {
                res.status(404).json({ massage: "canot updated" })

            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "Error fetching filed" })
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            const data = await MoveisModel.findByIdAndDelete(id)

            if (data) {
                res.status(200).json({ massage: "data has bin dleted" })
            } else {
                res.status(404).json({ massage: "canot faind data to delete" })

            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "Error fetching filed" })
        }
    }
}

module.exports = MyController