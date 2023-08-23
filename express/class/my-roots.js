const express = require('express');
const { getAllUsers, getBusinesses, getSchools } = require('../DAL/read-file')
class MyRouts {
    constructor() {
        this.router = express.Router()
        this.router.get('/', this.mainPage)
        this.router.get('/users', this.usersPage)
        this.router.get('/businesses', this.businessesPage)
        this.router.get('/schools', this.schoolsPage)
    }


    mainPage(req, res) {
        res.send("welcome to home page");
    }
    async usersPage(req, res) {
        try {
            const arrUsers = await getAllUsers()
            res.status(200).json(arrUsers)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "error fetching filed" })
        }
    }


    async businessesPage(req, res) {
        try {
            const arrBusinesses = await getBusinesses()
            res.status(200).json(arrBusinesses)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "error fetching filed" })
        }
    }


    async schoolsPage(req, res) {
        try {
            const arrSchools = await getSchools()
            res.status(200).json(arrSchools)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "error fetching filed" })
        }
    }
}

module.exports = MyRouts