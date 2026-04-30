const sumAll = function(a, b) {
  if (
    a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)
  ) return "ERROR";

  const smallNum = (a < b) ? a : b;
  const bigNum = (a < b) ? b : a;
  let sum = 0;

  for (let i = smallNum; i <= bigNum; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
