const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/users'

const getUsers = async(userName) => {
    const {data} = await axios.get(`${url}?username=${userName}`);
    return data
}
getUsers("Bret")
module.exports = {
    getUsers
}