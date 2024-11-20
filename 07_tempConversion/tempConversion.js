const convertToCelsius = function(temp) {
  let celcius = (temp - 32) * 5 / 9; 
  let roundedCelcius = Math.round(celcius * 10)/ 10;
  return roundedCelcius;
};



const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp * 9 / 5 + 32);
  let roundedFahrenheit = Math.round(fahrenheit * 10) / 10;

  return roundedFahrenheit;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
