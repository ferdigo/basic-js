const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 if (Array.isArray(members) === false) return false;
 let arr = [];
 let str = "";
 members.sort();
 console.log(members);

 for (let item of members) {
  if (typeof item == "string") {
   str = item.trim();

   arr.push(str[0].toUpperCase());
  }
 }
 return arr.sort().join("");
};
