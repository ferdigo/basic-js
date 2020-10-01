const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
let arr=[]
let result=[]
arr = backyard.flat(Infinity)
for(let item of arr){
  if(item === '^^') result.push(item)
}
return result.length
 
  // remove line with error and write your code here
};
