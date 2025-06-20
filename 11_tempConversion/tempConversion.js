/**
 * From Celsius to Fahrenheit
 * x °C = (x * (9 / 5) + 32) °F
 * From Fahrenheit to Celsius
 * x °F = (x - 32) * (5 / 9) °C
 */


const convertToCelsius = function(value) {
  resultFromFormula = (value - 32) * (5 / 9);
  return Math.round(resultFromFormula * 10) / 10;
};

const convertToFahrenheit = function(value) {
  resultFromFormula = (value * (9 / 5) + 32);
  return Math.round(resultFromFormula * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
