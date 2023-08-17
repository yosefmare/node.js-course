const js = require('../node_modules/jsonfile');
const path1 = "./json/users.json";
const path2 = "./json/phones.json";

const getUserPhone = async (id) => {
    const data = await js.readFile(path2);
    const userPhone = data.filter((user) => user.userId === id)
        .map((user) => user.phone)
        return userPhone
}


const getUser = async (id) => {
    const data = await js.readFile(path1)
    const user = data.filter((user) => user.id === id)
        .filter((user) => user.name)
    const userPhone = await getUserPhone(id)
    return {
        id: id,
        name: user[0].name,
        phone: userPhone[0]
    }
}
module.exports = {
    getUser
}