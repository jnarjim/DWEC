//1.Ejercicio JavaScript: Calculadora de gastos de viaje
function calcularCoste() {
    let alojamiento = parseFloat(prompt("Introduce los gastos por alojamiento: "));
    let alimentacion = parseFloat(prompt("Introduce los gastos por alimentacion: "));
    let entretenimiento = parseFloat(prompt("Introduce los gastos por entretenimiento: "));

let costeTotal = alojamiento + alimentacion + entretenimiento;
console.log("Gasto por alojamiento: " + alojamiento + "€, Gasto por alimentacion: " + alimentacion + "€, Gasto por entretenimiento: " + entretenimiento + "€")
console.log("El coste total del viaje es: " + costeTotal.toFixed(2) + "€");
}
calcularCoste();

//2.Ejercicio JavaScript: Calculadora edad canina
function edadCanina() {
    let edadPerro = parseInt(prompt("Introduce la edad de tu perro en años: "));
    let edadHumana = (edadPerro * 7);
    console.log("Edad del perro: " + edadPerro + " años")
    console.log("La edad del perro en años humanos es " + edadHumana + " años");
}
edadCanina();

//3.Ejercicio JavaScript: Calculadora de IMC (Índice de Masa Corporal)
function calcularIMC() {
    let peso = parseFloat(prompt("Introduce tu peso en kg: "));
    let altura = parseFloat(prompt("Introduce tu altura en metros: "));
    let imc = (peso / (altura **2));
    let clasificacion;
    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        clasificacion = "Normal";
    } else if (imc >= 25 && imc < 30) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }
    console.log("Peso: " + peso + " kg, Altura: " + altura + " m");
    console.log("IMC: " + imc + " ,Clasificacion: " + clasificacion);
}
calcularIMC();

//4.Ejercicio JavaScript: Calculadora de descuentos
function calcularDescuento() {
    let precioOriginal = parseFloat(prompt("Introduce el precio original del producto: "));
    let descuento = parseFloat(prompt("Introduce el porcentaje de descuento a aplicar: "));
    let precioFinal = precioOriginal - (precioOriginal * (descuento / 100));
    console.log("El precio final del producto después de aplicar un descuento del " + descuento + "% es: " + precioFinal.toFixed(2) + " euros");
}
calcularDescuento();

//5.Ejercicio JavaScript: Generador de números primos
function esPrimo(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true; 
}
function encontrarPrimo() {
    let n1 = parseInt(prompt("Introduce el primer numero: "));
    let n2 = parseInt(prompt("Introduce el segundo numero: "));
    let primos = []; 
    for (let i = n1; i <= n2; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    if (primos.length > 0) {
        console.log("Los números primos entre "+ n1 + " y " + n2 + " son: " + primos.join(", "));
    } else {
        console.log("No se encontraron numeros primos entre "+ n1 + " y " + n2);
    }
}
encontrarPrimo();

//6.Ejercicio JavaScript: Generador de secuencia Fibonacci
function calcularFibonacci(terminos) {
    let fibonacci= [0, 1];
    for (let i = 2; i < terminos; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci; 
}
function pedirTerminos() {
    let terminos = parseInt(prompt("Introduce el numero de terminos que quieres que tenga la secuencia: "));
    console.log("Serie de Fibonacci: " + calcularFibonacci(terminos));
}
calcularFibonacci();
pedirTerminos();

//7.Ejercicio JavaScript: Conversor de temperatura 
function convertirCelsius(celsius) {
    return (celsius * 9 / 5) + 32
}
function convertirFahrenheit(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}
function pedirTemperatura() {
    let tipoTemperatura = parseInt(prompt("¿Qué tipo de conversión deseas realizar? 1.Celsius a Fahrenheit 2.Fahrenheit a Celsius"));
    let grados = parseInt(prompt("Introduce el numero de grados: "));
    if (tipoTemperatura === 1) {
        let resultado = convertirCelsius(grados);
        console.log(grados + " grados Celsius equivalen a " + resultado.toFixed(2) + " grados Fahrenheit");
    } else if (tipoTemperatura === 2) {
        let resultado = convertirFahrenheit(grados);
        console.log(grados + " grados Fahrenheit equivalen a " + resultado.toFixed(2) + " grados Celsius");
    }
}
pedirTemperatura();

//8.Ejercicio JavaScript: Calcular factorial
function calculateFactorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}
let number = parseInt(prompt("Introduce un numero para calcular su factorial: "));
let factorial = calculateFactorial(number);
console.log("El factorial de " + number + " es " + factorial);