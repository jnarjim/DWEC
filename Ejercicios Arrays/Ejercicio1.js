
let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

let numero = prompt("Ingrese un número entre 0 y 6:");
numero = parseInt(numero);

if (numero >= 0 && numero <= 6) {
    alert("El día de la semana es " + dias[numero]);
} else {
    alert("Por favor, ingrese un número válido entre 0 y 6.");
}