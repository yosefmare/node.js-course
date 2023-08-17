const jf = require('../node_modules/jsonfile');
const dataPerson = './json/persons__2.json'

const personStreet = async (street) => {
    try {
        const result = await jf.readFile(dataPerson);
        const data = result.filter((person) => person.address.street.name === street).map((person) => person.name)
        return data
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    personStreet
};