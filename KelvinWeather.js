// the forcast today is 293 Kelvin. This value will stay constant.
const Kelvin = 293;
// Celsius is 273 lower than Kelvin. This will convert from Kalvin to Celsius.
const Celsius = Kelvin - 273;
// Fahrenheit = Celsius * (9/5) + 32. This will convert from Celsius to Fahrenheit and round down to the nearest whole number using .floor().
let fahrenheit = Math.floor(Celsius * (9 / 5) + 32);
// We can now ouput the temperature in degrees Fahrenheit to the console.
console.log('The temperature is' + " " + fahrenheit + " " + 'degrees Fahrenheit');