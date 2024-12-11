function esCurioso(num) {
    let digitos = String(num).split(''); // Divide el numero en dígitos, por ejemplo 111 seria 1, 1, 1
    let suma = 0;

    // Sumar los cubos de los dígitos, por ejemplo seria 1 al cubo + 1 al cubo + 1 al cubo
    for (let i = 0; i < digitos.length; i++) { 
        suma += Math.pow(parseInt(digitos[i]), 3); // Convierte los dígitos a numeros para operar, suma los numeros elevados al cubo (Math.pow)
    }

    // Verificar si coincide con el número original, por ejemplo, como la suma anterior da 3 y no 111, 111 no es un numero curioso
    return suma === num; // si esto ocurre, el numero es curioso y se añadiria al array de numeros curiosos
}
