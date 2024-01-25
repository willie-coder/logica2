// la temperatura en grados Celsius
let celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));

while (isNaN(celsius)) {
  alert("Error: Ingresa un valor numérico.");
  celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
}

// la temperatura a grados Fahrenheit y Kelvin
let fahrenheit = (celsius * 9/5) + 32;
let kelvin = celsius + 273.15;

//  los resultados 
console.log("Grados Fahrenheit: " + fahrenheit);
console.log("Grados Kelvin: " + kelvin);
