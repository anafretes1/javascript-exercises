const reverseString = function(string) {
  let splitStr = string.split("");
  let reverseAry = splitStr.reverse();
  let aryToStr = reverseAry.join("");
  return aryToStr;
};

// Do not edit below this line
module.exports = reverseString;
