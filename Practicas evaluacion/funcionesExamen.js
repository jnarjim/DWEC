/**
 * Función para determinar si un número es curioso.
 * @param {number} num - Número a evaluar.
 * @returns {boolean} - Verdadero si el número es curioso, falso en caso contrario.
 */
function esCurioso(num) {
    const digitos = String(num).split(''); // Convertir número a array de dígitos
    let sumaCubos = 0;

    // Sumar los cubos de los dígitos
    for (let i = 0; i < digitos.length; i++) {
        sumaCubos += Math.pow(parseInt(digitos[i]), 3);
    }

    // Verificar si coincide con el número original
    return sumaCubos === num;
}
