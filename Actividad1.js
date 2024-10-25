let saludo = "Hola, buenas tardes";
console.log(saludo);

let edad = 21;
console.log(edad);

let boolean = false;
console.log(boolean);

let varNull = null;
let varUndefined;
console.log("Variable de tipo null:", varNull);
console.log("Variable de tipo undefined:", varUndefined);

let articulo = {
    name: "Red Dead Redemption 2",
    price: 60,
    category: "Videojuegos"
};
console.log(articulo);

let ciudades = ["Roma", "Barcelona", "Madrid", "Londres", "Berlin"];
console.log(ciudades);

let colorFavorito = "Rojo";
console.log("Color favorito:", colorFavorito);
colorFavorito = "Negro";
console.log("Color favorito modificado:", colorFavorito);

let variableUndefined;
let variableNull = null;
console.log(variableUndefined + variableNull);

let fuera = "Variable fuera de la funcion";
function funcion() {
    let dentro = "Variable dentro de la funcion"
console.log(fuera);
console.log(dentro);
}
funcion();
console.log(fuera);
//console.log(dentro);

let nombreValido = "Jorge";
let edadValida = 18;
let telefono = "1234567890";
let $salario = 50.8;
// let 1nombreInvalido = "Pedro";  // No puede comenzar con un número
// let edad-invalida = "26";  // No puede contener guiones
// let telefono invalido = "0987654321";  // No puede contener espacios
// let salario@invalido = "172.8";   // No puede contener caracteres especiales como @
console.log("Nombre:" + nombreValido + " Edad: " + edadValida + " Telefono: " + telefono + " Salario: " + $salario);

let n1 = 4;
let n2 = 2;
let suma = n1 + n2;
let resta = n1 - n2;
let multiplicacion = n1 * n2;
let division = n1 / n2;
let modulo = n1 % n2;
let incremento = ++n1;
let decremento = --n2;
console.log("Suma: " + suma + " Resta: " + resta + " Multiplicacion: " + multiplicacion + " Division: " + division + " Modulo: " + modulo + " Incremento de n1: " + incremento + " Decremento de n2: " + decremento);

let texto = "Hola,\n\tEsto es una cadena de texto\n\tcon varias líneas y tabulaciones.";
console.log(texto);


let num= 0;
if (num > 0) {
    console.log("El número es positivo.");
} else if (num < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

let edad1 = 73;
if (edad1 < 18) {
    console.log("Eres menor de edad.");
} else if (edad1 >= 18 && edad1 < 60) {
    console.log("Eres un adulto.");
} else if (edad1 >= 60) {
    console.log("Eres un viejo");
}

for (let i = 0; i <= 4; i++) {
    console.log(i);
}

let contador = 0;
while (contador <= 4) {
    console.log(contador);
    contador++; 
}

let x = 0;
do {
    console.log(x);
    x++;
} while (x <= 4);

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

for (let j = 0; j < 5; j++) {
    if (j === 2){
        continue;
    }
    console.log(j);
}

let mes = parseInt(prompt("Introduce un número del 1 al 12:"));
let nombreMes;
switch (mes) {
    case 1:
        nombreMes = "Enero";
        break;
    case 2:
        nombreMes = "Febrero";
        break;
    case 3:
        nombreMes = "Marzo";
        break;
    case 4:
        nombreMes = "Abril";
        break;
    case 5:
        nombreMes = "Mayo";
        break;
    case 6:
        nombreMes = "Junio";
        break;
    case 7:
        nombreMes = "Julio";
        break;
    case 8:
        nombreMes = "Agosto";
        break;
    case 9:
        nombreMes = "Septiembre";
        break;
    case 10:
        nombreMes = "Octubre";
        break;
    case 11:
        nombreMes = "Noviembre";
        break;
    case 12:
        nombreMes = "Diciembre";
        break;
    default:
        nombreMes = "Error, el numero introducido no es valido";
}
console.log(nombreMes);


let radio = parseFloat(prompt("Ingresa el radio del círculo:"));
function calcularArea(radio) {
    return Math.PI * Math.pow(radio, 2);
}
function calcularPerimetro(radio) {
    return 2 * Math.PI * radio; 
}
let area = calcularArea(radio);
let perimetro = calcularPerimetro(radio);
console.log("El área del círculo es: " + area.toFixed(2));
console.log("El perímetro del círculo es: " + perimetro.toFixed(2));


function calculatePower(base, exponent) {
    return Math.pow(base, exponent); 
}
let result = calculatePower(2, 3);
console.log(result);

let cantidadNumeros = parseInt(prompt("Ingresa la cantidad de números:"));
let numeros = [];
for (let i = 0; i < cantidadNumeros; i++) {
    let numero = parseFloat(prompt("Ingresa el número " + (i + 1) + ":"));
    numeros.push(numero); 
}
function findLargestNumber(array) {
    let max = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]; 
        }
    }
    return max;
}
let numeroMasGrande = findLargestNumber(numeros);
console.log("El número más grande es: " + numeroMasGrande);

for (let i = 20; i <= 30; i++) {
    console.log(i);
}
for (let i = 30; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
let suma1 = 0;
for (let i = 1; i <= 50; i++) {
    suma1 += i;
}
console.log("La suma de los primeros 50 números naturales es: " + suma1);
for (let i = 1; i <= 10; i++) {
    console.log("8 x " + i + " = " + (8 * i));
}
let array = [5, 10, 15, 20, 25];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
let altura = 9;
for (let i = 1; i <= altura; i++) {
    console.log("*".repeat(i));
}
let sumaPares = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}
console.log("La suma de los números pares del 1 al 50 es: " + sumaPares);
for (let i = 30; i >= 20; i--) {
    console.log(i);
}
let numeros1 = [10, 20, 30, 40, 50];
let sumaNumeros = 0;

for (let i = 0; i < numeros1.length; i++) {
    sumaNumeros += numeros1[i];
}
let promedio = sumaNumeros / numeros1.length;
console.log("El promedio del array es: " + promedio);









