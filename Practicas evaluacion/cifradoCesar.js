let alfabetos = {
    'castellano' : 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split(''), // Separa las letras de los abecedarios para recorrer el texto en orden
    'ingles' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
}

function rotacionMaxima() {
    // Alfabeto seleccionado
    let alfabeto = document.getElementById("alfabeto").value;

    // Asigna el número de rotación máxima dependiendo del alfabeto seleccionado, español 26 e ingles 25
    document.getElementById("rotado").max = alfabetos[alfabeto].length - 1;
}

function descifrar() {

    let alfabeto = document.getElementById("alfabeto").value; // Seleccionar alfabeto
    let alfabeto_seleccionado = alfabetos[alfabeto]; // Accede al valor del diccionario para guardar el alfabeto que se quiere usar

    let rotado = parseInt(document.getElementById("rotado").value); // Guarda el nivel de rotacion

    let texto = document.getElementById("texto").value; // Guarda el texto a descifrar

    let resultado = ''; // String vacío en el que estará el resultado

    for (let i = 0; i < texto.length; i++) { // Recorro el texto letra a letra

        let letra = texto.charAt(i); // Guardo la letra en la que me encuentro
        let indice = alfabeto_seleccionado.indexOf(letra);
         // Guardo el índice de la letra cifrada almacenada para actualizar el índice, si no encuentra la letra en el diccionario devuelve -1 (indexOf)

        if (indice !== -1) { 
        // Si encuentra la letra actualizo el índice, por ejemplo si Y es 26 y tiene rotacion 2, su nuevo índice sería 24 y la letra sería W (si indice no es igual a -1)

            let nuevoIndice = (indice - rotado + alfabeto_seleccionado.length) % alfabeto_seleccionado.length;
             // Calcular el nuevo índice, por ejemplo si tienes la A y la rotacion es 2, seria la Y para que no diese con un espacio vacío

            resultado += alfabeto_seleccionado[nuevoIndice]; // Las letras descifradas se van añadiendo al string de resultado (que inicia vacío)

        } else { 

            resultado += letra; // Si no encuentra letra, por ejemplo un !, no afectaría y se queda igual
        }
    }

    // Mostrar el resultado de color rojo
    document.getElementById("resultado").textContent = resultado;
    document.getElementById("resultado").style.color = "red";
}
