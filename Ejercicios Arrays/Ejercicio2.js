
let booleano = ["falso", "verdadero"];

let numero = prompt("Ingresa un número entre 0 y 9:");
numero = parseInt(numero);

if (numero >= 0 && numero <= 9) {
    alert(booleano[1]);
} else {
    alert(booleano[0]);
}