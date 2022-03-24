const palindromes = function (str) {
  let regExp = /[\W]/g; // make a search to exclude non-alphanumeric characters
  let downStr = str.toLowerCase();
  downStr = downStr.replace(regExp, ''); // here we eliminate all unwanted characters
  let reverseStrArr = downStr.split('').reverse();
  let reverseProper = reverseStrArr.join('');
  return reverseProper === downStr;

};

// Do not edit below this line
module.exports = palindromes;
