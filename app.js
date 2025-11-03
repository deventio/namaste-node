
//require("./xyz")
//const obj = require("./sum")
//const { calculateSum} = require("./calculate/sum")
//import  { calculateSum} from "./sum.js";
//const {calculateMultiply} = require("./calculate/multiply")

const util = require("node:util");
const {calculateMultiply, calculateSum} = require("./calculate/")

const data = require("./data.json")
var name = "Namaste NodeJS"

console.log(data);
var a= 10;
var b =12;
var x=100; 

console.log(name);
console.log(a+b);
//console.log(obj.x);
//obj.calculateSum(a,b);
calculateSum(a,x);
calculateMultiply(a,x);
//console.log(x);
//console.log(global);
//console.log(this); //empty

//console.log(globalThis);

//console.log(global === globalThis); //true