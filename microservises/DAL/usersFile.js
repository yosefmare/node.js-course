const jf = require('jsonfile');
const path = "./json/phones.json"
const readUsersPhonesFile = async (name) => {
    const { users } = await jf.readFile(path)
    let userName = users.find(user => user.username === name);
    return userName
}
module.exports = {
    readUsersPhonesFile
}