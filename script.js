let Celsius = document.getElementById('Celsius');
let Fahrenheit = document.getElementById('Fahrenheit');
let Kelvin = document.getElementById('Kelvin');
Celsius.oninput = function () {
    let f = (parseFloat(Celsius.value) * 9) / 5 + 32;
    Fahrenheit.value = parseFloat(f.toFixed(2));
  
    let k = (parseFloat(Celsius.value) + 273.15);
    Kelvin.value = parseFloat(k.toFixed(2));
}
Fahrenheit.oninput = function () {
    let c = ((parseFloat(
        Fahrenheit.value) - 32) * 5) / 9;
    Celsius.value = parseFloat(c.toFixed(2));
  
    let k = (parseFloat(
        Fahrenheit.value) - 32) * 5 / 9 + 273.15;
    Kelvin.value = parseFloat(k.toFixed(2));
}
Kelvin.oninput = function () {
    let f = (parseFloat(
        Kelvin.value) - 273.15) * 9 / 5 + 32;
    Fahrenheit.value = parseFloat(f.toFixed(2));
  
    let c = (parseFloat(Kelvin.value) - 273.15);
    Celsius.value = parseFloat(c.toFixed(2));
}