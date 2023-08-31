const express = require('express')
const router = express.Router()
const personData = require("../BLL/create-person-obj")

class PersonRoots {
    constructor() {
        this.router = router
        router.get("/", this.getUsers)
    }

    async getUsers(req, res) {
        try {
            
            const person1 = await personData.createPersonObj(1)
            const person2 = await personData.createPersonObj(2)
        res.status(200).json([
            person1,
            person2
        ])
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "error fetching filed" })
        }
    }
}

module.exports = PersonRoots