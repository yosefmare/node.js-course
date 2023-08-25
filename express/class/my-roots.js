const express = require('express');
const { getAllUsers, getBusinesses, getSchools } = require('../DAL/read-file');
const arrResources = ['users', 'businesses', 'schools'];
class MyRouts {
    constructor() {
        this.router = express.Router()
        this.router.get('/', this.homePage)
        arrResources.forEach((resource) => {
            this.router.get(`/${resource}`, this.getInfo.bind(this, resource))
            this.router.get(`/${resource}/:id`, this.getInfoById.bind(this, resource))
            this.router.post(`/${resource}`, this.create.bind(this, resource))
            this.router.put(`/${resource}/:id`, this.update.bind(this, resource))
            this.router.delete(`/${resource}/:id`, this.delete.bind(this, resource))
        })
    }

    homePage(req, res) {
        res.send("hello to home page")
    }
    // get info
    async getInfo(resourceType, req, res) {
        try {
            const getResource = this.getResourceFunction(resourceType)
            const resource = await getResource()
            res.status(200).json(resource)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: 'filed to fetch' })
        }
    }

    // get info by id
    async getInfoById(resourceType, req, res) {
        try {
            const getResource = this.getResourceFunction(resourceType)
            const resource = await getResource()

            let resourceId = resource[resourceType].find((resource) => resource.id === parseInt(req.params.id))

            if (resourceId) {
                res.status(200).json(resourceId)
            } else {
                res.status(404).json({ massage: "not found" })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: 'filed to fetch' })
        }
    }

    // create info
    async create(resourceType, req, res) {
        try {
            const getResource = this.getResourceFunction(resourceType)
            const resource = await getResource()
            let obj = req.body
            resource[resourceType].push(obj)
            res.status(200).json(obj)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: 'filed to fetch' })
        }
    }

    // update info
    async update(resourceType, req, res) {
        try {
            const getResource = this.getResourceFunction(resourceType)
            const resource = await getResource()
            let result = resource[resourceType].find((resource) => resource.id === parseInt(req.params.id))

            if (result) {
                res.status(200).json({ massage: 'updated' })
            } else {
                res.status(500).json({ massage: 'not found' })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: 'filed to fetch' })
        }
    }

    // delete info
    async delete(resourceType, req, res) {
        try {
            const getResource = this.getResourceFunction(resourceType)
            const resource = await getResource()
            let result = resource[resourceType].find((resource) => resource.id === parseInt(req.params.id))

            if (result) {
                res.status(200).json({ massage: 'info deleted' })
            } else {
                res.status(500).json({ massage: 'not found' })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: 'filed to fetch' })
        }
    }
    // method that switch between resources
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


