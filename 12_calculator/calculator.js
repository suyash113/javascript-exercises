const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(arr1) {
  sum1 = 0
  for (let i of arr1) {
    sum1 += i  
  }
  return sum1
  // return arr1.reduce((total, current) => total + current, 0);
};

const multiply = function(arr2) {
  product = 1
  for (let i of arr2) {
    product *= i
  }
  return product
  // return arr2.reduce((product, current) => product * current)
};

const power = function(a, b) {
	return a**b
};

const factorial = function(a) {
  factorial1 = 1
	for (let i = a; i > 0;  i--) {
    factorial1 *= i 
  }
  return factorial1
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
