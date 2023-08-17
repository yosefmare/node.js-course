const url = 'https://jsonplaceholder.typicode.com/'
const axios = require('axios');
const jf = require('../node_modules/jsonfile');


const getUserName = async (userName) => {
    const { data } = await axios.get(`${url}users`);
    data.forEach(element => {

        if (element.name[0] === "E") {
            writeJsonFile(element.id)
        }
        if (userName === element.username) {
            console.log(element.name);
            console.log(element.id);
        }

    });
}

const writeJsonFile = async (userId) => {
    const { data } = await axios.get(`${url}todos?userId=${userId}`)
    const titles = data.map((task) => task.title)
    const userTasks = {
        tasksTitle: titles
    }
    // console.log(titles);
    jf.writeFile("./json/tasks.json", [userTasks])
}
module.exports = {
    getUserName
}