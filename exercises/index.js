const strUtils = require('./utils/strUtils');
const arrUtils = require('./utils/arrUtils');

const inputString = "Hello, world!";
const stringLength = strUtils.getLength(inputString);
console.log(`Length of '${inputString}': ${stringLength}`);

const stringArray = ["apple", "banana", "cherry"];
const totalArrayLength = arrUtils.getArrLength(stringArray);
console.log(`Total length of array strings: ${totalArrayLength}`);
