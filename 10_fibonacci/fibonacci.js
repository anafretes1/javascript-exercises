const fibonacci = function(a) {
  Number(a);
  let arr = [0,1];

  if (a > -1){
    for (let i = 0; i < a ; i++) {
      arr.push(arr[i] + arr[i+1]);
    }
    return arr[a];
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
