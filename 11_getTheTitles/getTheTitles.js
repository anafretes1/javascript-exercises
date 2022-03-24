const getTheTitles = function(arr) {
  const key = 'title';
  let newArr = [];
  for (i of arr) {
    newArr.push(i[key]);
  }
  return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
