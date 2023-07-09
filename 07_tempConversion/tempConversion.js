const convertToCelsius = function(fahrenheitValue) {
  return parseFloat(((fahrenheitValue - 32) * 5 / 9).toFixed(1)); 
};

const convertToFahrenheit = function(celsiusValue) {
  return parseFloat((celsiusValue * 9 / 5).toFixed(1)) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
