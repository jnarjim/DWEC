
function letras (letra, array) {
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === letra) {
            return true;
        }
    }
    return false;
}

console.log(letras('a', ['w', 'e', 'r', 'i']));
console.log(letras('e', ['w', 'e', 'r', 'i']));