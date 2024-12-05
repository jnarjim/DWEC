function esCurioso(num) {
    let digitos = String(num).split(''); // Convierte el numero a array de dígitos, por ejemplo 111 seria 1, 1, 1
    let sumaCubos = 0;

    // Sumar los cubos de los dígitos, por ejemplo seria 1 al cubo + 1 al cubo + uno al cubo
    for (let i = 0; i < digitos.length; i++) { 
        sumaCubos += Math.pow(parseInt(digitos[i]), 3);
    }

    // Verificar si coincide con el número original, por ejemplo, como la suma anterior da 3 y no 111, 111 no es un numero curioso
    return sumaCubos === num; // si esto ocurre, el numero es curioso y se añadiria al array de numeros curiosos
}
