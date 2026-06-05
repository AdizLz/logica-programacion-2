let celsius;
let kelvin;
let fahrenheit;

do {
    celsius = prompt("Ingresa la temperatura en grados Celsius");

    if (isNaN(celsius) || celsius === "") {
        console.log("Error: Debes ingresar un número válido");
    }

} while (isNaN(celsius) || celsius === "");

celsius = Number(celsius);

kelvin = celsius + 273.15;
fahrenheit = (celsius * 9 / 5) + 32;

console.log("Grados Kelvin: " + kelvin);
console.log("Grados Fahrenheit: " + fahrenheit);