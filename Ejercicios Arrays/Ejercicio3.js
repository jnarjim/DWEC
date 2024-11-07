
function sumaLista(lista) {
    let suma = 0;

    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }

    return suma;
}

let resultado = sumaLista([2, 4, 5, 1, 2]);
alert("El resultado de la suma es: " + resultado);