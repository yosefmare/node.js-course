const getLengthFunction = require('./strUtils');
const getArrLength = (arr) => {
    let length = 0;
    for (const str of arr) {
        length += getLengthFunction.getLength(str)
    };
    return length
}
module.exports = {
    getArrLength
}