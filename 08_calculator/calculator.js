const add = function(a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function(a, b) {
  let subtract = a - b;
  return subtract;
};

const sum = function(a) {
  let sumArray = a.reduce(function (accumulator, current) {
    return accumulator + current;
  }, 0);

  return sumArray;
};

const multiply = function(a) {
  let multiply = a.reduce(function (accumulator, current) {
    return accumulator * current;
  }, 1);

  return multiply;
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(number) {
  let result = 1; 
  for (let i = 1; i <= number; i++) {
    result *= i; 
  }

  return result; 
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
