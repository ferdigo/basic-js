const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
 if(typeof(str) !== String && str != Number) return false
  let num = (Math.log(MODERN_ACTIVITY/str.toString(10)))/(0.693/HALF_LIFE_PERIOD)
return num;
  // remove line with error and write your code here
};
