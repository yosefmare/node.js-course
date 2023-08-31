const axios = require("axios")

const usersUrl = 'https://jsonplaceholder.typicode.com/users/'
const addressUrl = 'http://localhost:8000/users/query?externalId='

const getUsersInfo = async (id) => {
    const {data} = await axios.get(`${usersUrl}/${id}`)
    return data
}
const getAddressInfo = async (id) => {
    const {data} = await axios.get(`${addressUrl}${id}`)
    return data
}
module.exports = {
    getUsersInfo,
    getAddressInfo
}