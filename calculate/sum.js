console.log("sum module executed")

/*export function calculateSum(a,b){
    var sum = a+b;
    console.log("sum is "+sum);
}*/
 var x=  "hello world";

/*module.exports = {
    x ,
    calculateSum
};*/

function calculateSum(a,b){
    var sum = a+b;
    console.log("sum is "+sum);
}
module.exports.x = x;
module.exports.calculateSum = calculateSum;

