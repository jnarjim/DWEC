
function separar(colores) {
    let resultado = "";
    
    for (let i = 0; i < colores.length; i++) {
        resultado += colores[i];
        
        if (i < colores.length - 1) {
            resultado += "-";
        }
    }
    return resultado;
}

console.log(separar(["rojo", "verde", "azul"]));
