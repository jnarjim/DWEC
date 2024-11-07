function arrayNumeros() {
    let numeros = [];
    let num;
    let pares = 0;
    let impares = 0;
    let cantidad = 0;

    while (true) {
        num = prompt("Ingresa un numero (escribe 0 para salir):");
        num = parseInt(num);

        if (isNaN(num) || num === 0) break;

        numeros[cantidad] = num;
        cantidad++;

        if (num % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    alert("El array de entrada es: [" + numeros.join(", ") + "]");
    alert("Hay " + pares + " numeros pares y " + impares + " numeros impares.");
}

arrayNumeros();