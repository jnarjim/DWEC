
function minimo(array, modo) {
    let valor = array[0];
    let lugar = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < valor) {
            valor = array[i];
            lugar = i;
        }
    }

    if (modo === 'v') {
        return valor;
    } else if (modo === 'i') {
        return lugar;
    }

}

console.log(minimo([4, 5, 7], 'v'));
console.log(minimo([4, 5, 7], 'i'));