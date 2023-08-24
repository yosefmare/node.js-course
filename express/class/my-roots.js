const express = require('express');
const { getAllUsers, getBusinesses, getSchools } = require('../DAL/read-file');
class MyRouts {
    constructor() {
        this.router = express.Router()
        this.router.get('/', this.homePage)

        const arrResources = ['users', 'businesses', 'schools'];

        arrResources.forEach((resource) => {
            this.router.get(`/${resource}`, this.getAllInfos.bind(this, resource))
            this.router.get(`/${resource}`, this.getAllInfos.bind(this, resource))
        })
    }

    homePage(req, res){
        res.send("hello to home page")
    }

    async getAllInfos(resourceType, req, res) {
        try {
            const getResource = this.getResourceFunction(resourceType)
            const resource = await getResource()
            res.status(200).json(resource)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: 'filed to fetch' })
        }


    }

    getResourceFunction(resourceType) {
        switch (resourceType) {
            case 'users':
                return getAllUsers;
            case 'businesses':
                return getBusinesses;
            case 'schools':
                return getSchools;
            default:
                throw new Error('Invalid resource type');
        }
    }
}

module.exports = MyRouts


