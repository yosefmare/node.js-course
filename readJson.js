const jf = require('jsonfile');

const readFile = async (file) => {
    try {
        const data = await jf.readFile(file);
        return data
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    readFile
}