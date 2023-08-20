const readUsersPhonesFile = require('../DAL/usersFile')
const getUser = require('../DAL/usersWS')
const getUsersTitlesTasks = require('../DAL/todosWS')

const userInfos = async (userName) => {
    const user = await getUser.getUsers(userName)
    const userPhone = await readUsersPhonesFile.readUsersPhonesFile(userName)
    const tasksTitles = await getUsersTitlesTasks.getUsersTitlesTasks(user[0].id)
    return {
        id: user[0].id,
        name: user[0].name,
        email: user[0].email,
        phone: userPhone.phones,
        titles: tasksTitles
    }
}
module.exports = {
    userInfos
}