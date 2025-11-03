
require ("./xyz.js");
const util = require("node:util");
const {calculateMultiply, calculateSum} = require("./calculate/")

const data = require("./data.json")
var name = "Namaste NodeJS"

console.log(data);
var a= 10;
var b =20;

calculateSum(a,b);
calculateMultiply(a,b);
