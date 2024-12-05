let alfabetos = {
    'castellano' : 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
    'ingles' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}

function rotacionMaxima() {

        let alfabeto = document.getElementById("alfabeto").value;

        document.getElementById("rotacion").max = alfabetos[alfabeto].length - 1;
}

function descifrar() {

    let alfabeto = document.getElementById("alfabeto").value;
    let alfabeto_seleccionado = alfabetos[alfabeto];
    let rot = parseInt(document.getElementById("rotacion").value);
    let texto = document.getElementById("texto").value;
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        
    }
}
