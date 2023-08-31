const jf = require("jsonfile");
const path = './json/persons.json'

const readJsonFile = async (id) => {
    const data = await jf.readFile(path)
    const phone = data.persons.find((phone) => phone.id === id)
    return phone
}

module.exports ={
    readJsonFile
}
