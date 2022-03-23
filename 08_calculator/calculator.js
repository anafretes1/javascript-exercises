const add = function(a, b) {
	const addition = a + b;
  return addition;
};

const subtract = function(a, b) {
  const subtraction = a - b;
  return subtraction;
};

const sum = function(a) {
  let result = 0;
  if (a.length > 0) {
    for ( i of a) {
      result += +i;
    }
  }
  return result;
};

const multiply = function(a) {
  let result = 1;
  if (a.length > 0) {
    for (i of a) {
      result *= +i;
    }
  }
  return result;
};

const power = function(a, b) {
  const result = a ** b;
  return result;
};

const factorial = function(a) {
  let result = 1;
  if (a === 0) {
    return result;
  } else {
    for (let i = 2; i<=a; i++) {
      result *= i;
    }
    return result
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
