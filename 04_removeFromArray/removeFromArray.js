const removeFromArray = function(array, ...args) {
  let argsLen = args.length;
  let argsArray = args;
  let itemIdx = -1;
  for (let i = 0; i < argsLen; i++) {
    itemIdx = array.indexOf(argsArray[i]);
    if (itemIdx > -1) {
      array.splice(itemIdx,1)
    } else {
      continue;
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
