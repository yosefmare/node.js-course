const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/todos'

const getUsersTitlesTasks = async (id) => {
    const { data } = await axios.get(`${url}?userId=${id}`);
    let titles = data.map((task) => task.title).slice(0,10)
return titles
}

getUsersTitlesTasks(1)

module.exports = {
    getUsersTitlesTasks
}