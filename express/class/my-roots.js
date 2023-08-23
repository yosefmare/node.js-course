const express = require('express');
const { getAllUsers, getBusinesses, getSchools } = require('../DAL/read-file');
const { parse } = require('dotenv');
class MyRouts {
    constructor() {
        this.router = express.Router()
        this.router.get('/', this.mainPage)
        this.router.get('/users', this.usersPage)
        this.router.get('/businesses', this.businessesPage)
        this.router.get('/schools', this.schoolsPage)

        // get by id stack
        this.router.get('/users/:id', this.getUserById)
        this.router.get('/businesses/:id', this.getBusinessById)
        this.router.get('/schools/:id', this.getSchoolById)

        // create new object info
        // this.router.post('/users/:id', this.getUserById)
        // this.router.post('/businesses/:id', this.getBusinessById)
        // this.router.post('/schools/:id', this.getSchoolById)
        // update Info
        // this.router.put('/users/:id', this.getUserById)
        // this.router.put('/businesses/:id', this.getBusinessById)
        // this.router.put('/schools/:id', this.getSchoolById)
        //  delete info
        this.router.delete('/users/:id', this.deleteUser)
        this.router.delete('/businesses/:id', this.deleteBusiness)
        this.router.delete('/schools/:id', this.deleteSchool)


    }


    mainPage(req, res) {
        res.send("welcome to home page");
    }

    // request get all
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


    // requests by id 
    async getUserById(req, res) {
        try {
            const arrUsers = await getAllUsers()
            const user = arrUsers.find((user) => user.id === parseInt(req.params.id))
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({ massage: 'user not found' })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "error fetching filed" })
        }
    }


    async getBusinessById(req, res) {
        try {
            const arrBusinesses = await getBusinesses()
            const business = arrBusinesses.businesses.find((business) => business.id === parseInt(req.params.id))
            if (business) {
                res.status(200).json(business)
            } else {
                res.status(404).json({ massage: "business not found" })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "error fetching filed" })
        }
    }


    async getSchoolById(req, res) {
        try {
            const arrSchools = await getSchools()
            const school = arrSchools.schools.find((school) => school.id === parseInt(req.params.id))
            if (school) {
                res.status(200).json(school)

            } else {
                res.status(404).json({ massage: "school not found" })

            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "error fetching filed" })
        }
    }

    // delete info
    async deleteSchool(req, res) {
        try {
            const arrSchools = await getSchools();
            const schoolIndex = arrSchools.schools.findIndex((school) => school.id === parseInt(req.params.id));

            if (schoolIndex !== -1) {
                arrSchools.schools.splice(schoolIndex, 1);
                res.status(200).json({ message: "School has been deleted", schools: arrSchools.schools });
            } else {
                res.status(404).json({ message: 'School not found' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error fetching filed" });
        }
    }

    async deleteBusiness(req, res) {
try{
    const arrBusinesses = await getBusinesses()
    const businessIndex = arrBusinesses.businesses.findIndex((business) => business.id === parseInt(req.params.id))

    if (businessIndex !== -1) {
        arrBusinesses.businesses.splice(businessIndex, 1)
        res.status(200).json({
            massage: "business has bi deleted",
            businesses: arrBusinesses.businesses
        })
    } else{
        res.status(404).json({massage: "business not found"})
    }
} catch (error){
    console.log(error);
    res.status(500).json({massage: "error fetching filed"})
}
    }

    async deleteUser(req, res){
try{
    const arrUsers = await getAllUsers()
    const user = arrUsers.findIndex((user) => user.id === parseInt(req.params.id))

    if (user !== -1) {
        arrUsers.splice(user, 1)
        res.status(200).json({
            massage: "user has bin deleted",
        arrUsers: arrUsers
        })
    }else {
        res.status(404).json({massage: "user not found"})
    }
} catch(error){
    console.log(error);
    res.status(500).json({massage: "error fetching filed"})
}
    }
}

module.exports = MyRouts


