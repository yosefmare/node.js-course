const jf = require('jsonfile');

const pathUsers = './json/users.json'
const pathBusinesses = './json/businesses.json'
const pathSchools = './json/schools.json'

const getAllUsers = async () => {
    try {
        const users = await jf.readFile(pathUsers);
        return users
    } catch (error) {
        console.log("error read file filed", error);
    }
}

const getBusinesses = async () => {
    try {
        const businesses = await jf.readFile(pathBusinesses);
        return businesses
    } catch (error) {
        console.log(" error read file filed", error);
    }
}
const getSchools = async () => {
    try {
        const schools = await jf.readFile(pathSchools);
        return schools
    } catch (error) {
        console.log(" error read file filed", error);
    }
}


module.exports = {
    getAllUsers,
    getBusinesses,
    getSchools
}