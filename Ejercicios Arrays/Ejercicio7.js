
function esVocal(letra) {
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    for (let i = 0; i < vocales.length; i++) {
        if (letra === vocales[i]) {
            return true;
        }
    }
    return false;
}

console.log(esVocal('A'));
console.log(esVocal('z'));